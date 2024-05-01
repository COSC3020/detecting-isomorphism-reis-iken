function areIsomorphic(graph1, graph2) {
    if (Object.keys(graph1).length !== Object.keys(graph2).length) return false;

    const signature1 = graphSignature(graph1);
    const signature2 = graphSignature(graph2);

    return signature1 === signature2;
}

function graphSignature(graph) {
    const signature = [];
    const vertices = Object.keys(graph).sort();
    for (const vertex of vertices) {
        const edges = graph[vertex];
        const sortedEdges = [...edges].sort((a, b) => a - b);
        signature.push(edges.length);
        signature.push(...sortedEdges);
    }
    return signature.join('');
}
