function are_isomorphic(graph1, graph2) {
    if (Object.keys(graph1).length !== Object.keys(graph2).length) {
        return false;
    }
    const degrees1 = Object.values(graph1).map(neighbors => neighbors.length);
    const degrees2 = Object.values(graph2).map(neighbors => neighbors.length);
    degrees1.sort((a, b) => a - b);
    degrees2.sort((a, b) => a - b);
    if (JSON.stringify(degrees1) !== JSON.stringify(degrees2)) {
        return false;
    }
    for (let v1 in graph1) {
        let matched = false;
        for (let v2 in graph2) {
            if (JSON.stringify(graph1[v1]) === JSON.stringify(graph2[v2])) {
                delete graph2[v2];
                matched = true;
                break;
            }
        }
        if (!matched) {
            return false;
        }
    }
    return true;
}
