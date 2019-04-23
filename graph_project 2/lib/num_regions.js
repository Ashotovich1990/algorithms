function numRegions(graph) {
    let res = 0; 
    let visited = new Set(); 

    for (let node in graph) {
        if (!visited.has(node)) {
            res++;
            addNodes(node, graph, visited);
        }
    }
    
    return res;
}

function addNodes(node, graph, set) {
  if (set.has(node)) return; 
  set.add(node);
  graph[node].forEach(child => addNodes(child,graph,set));
}

module.exports = {
    numRegions
};