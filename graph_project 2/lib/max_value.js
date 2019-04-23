function maxValue(node, visited=new Set()) {
    let nodes = [node]; 
    let maxValue = node.val;
    while (nodes.length) {
        node = nodes.shift(); 
        if (!visited.has(node)) {
            visited.add(node);
            if (node.val > maxValue) maxValue = node.val; 
            nodes.push(...node.neighbors);
        }
    }
    return maxValue;
}

module.exports = {
    maxValue
};