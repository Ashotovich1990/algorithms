let graph = {
    'a': { 'c': 1, 'b': 7 },
    'b': { 'a': 7, 'd': 12, 'e': 13 },
    'c': { 'a': 1, 'd': 20, 'f': 4 },
    'd': { 'b': 12, 'c': 20, 'e': 5 },
    'e': { 'b': 13, 'd': 5, 'f': 9 },
    'f': { 'c': 4, 'e': 9 }
};

const dijkstras = (graph, source) => {
    distance = {}; 
    for (let node in graph) {
        distance[node] = Infinity;
    }

    distance[source] = 0; 

    let unvisited = new Set(Object.keys(graph)); 
    while (unvisited.size > 0) {
    let currNode = getMinNode(unvisited, distance);
    console.log(currNode);
    unvisited.delete(currNode);

    for (let node in graph[currNode]) {
        let totalDist = distance[currNode] + graph[currNode][node];
        console.log(totalDist)
        distance[node] = totalDist < distance[node] ? totalDist : distance[node];
    }
}

    return distance;

}

function getMinNode(graph, distance) {
    return Array.from(graph).reduce((minNode,node) => {
        return distance[node] > distance[minNode] ? minNode : node;
    })
}

// {a: 0, b: 7, c: 1, d: 19, e: 14, f: 5}