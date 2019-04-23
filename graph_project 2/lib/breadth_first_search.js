function breadthFirstSearch(startingNode, targetVal) {
    let visited = new Set();
    let nodes = [startingNode]; 
    let node;
    while (nodes.length) {
        node = nodes.shift(); 
        if (!visited.has(node)) {
            visited.add(node);
            if (node.val === targetVal) return node; 
            nodes.push(...node.neighbors);
        }
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};