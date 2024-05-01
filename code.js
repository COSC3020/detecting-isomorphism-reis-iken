function areIsomorphic(graph1, graph2) {
    if (graph1.length !== graph2.length) return false;

    const signature1 = graphSignature(graph1);
    const signature2 = graphSignature(graph2);

    return signature1 === signature2;
}

function graphSignature(graph) {
    const signature = [];
    for (const vertex of Object.values(graph)) {
        const sortedVertex = [...vertex].sort((a, b) => a - b);
        signature.push(vertex.length);
        signature.push(...sortedVertex);
    }
    return signature.sort().join('');
}
