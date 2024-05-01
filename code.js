function are_isomorphic(graph1, graph2) {
    let vertices1 = Object.keys(graph1);
    let vertices2 = Object.keys(graph2);
    if (vertices1.length !== vertices2.length) {
        return false;
    }
    let sortedNeighbors1 = vertices1.map(v => graph1[v].sort().join(',')).sort();
    let sortedNeighbors2 = vertices2.map(v => graph2[v].sort().join(',')).sort();
    return sortedNeighbors1.join('-') === sortedNeighbors2.join('-');
}
