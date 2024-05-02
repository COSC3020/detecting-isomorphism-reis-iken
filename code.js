function are_isomorphic(graph1, graph2) {
    if (graph1.length !== graph2.length) {
        return false;
    }
    return helper(graph1, graph2, []);
}

function helper(graph1, graph2, map) {
    if (Object.keys(map).length === graph1.length) {
        for (let v = 0; v < map; v++) {
            let next = graph1[v];
            let mapped = map[v];
            let compare = true;
            if (next.length !== graph2[mapped].length) {
                compare = false;
            }
            for (let n of next) {
                const mappedNeighbor = mapping[n];
                if (!graph2[mapped].includes(mappedNeighbor)) {
                    compare = false;
                }
            }
            if (!compare) {
                return false;
            }
        }
        return true;
    }
    for (let i = 0; i < graph1.length; i++) {
        if (!map.hasOwnProperty(i)) {
            let v1 = i;
            let d1 = graph1[v1].length;
            for(let j = 0; j < graph2.length; j++) {
                if(graph2[j].length == d1 && !Object.values(map).includes(j)) {
                    let v2 = j;
                    map[v1] = v2;
                    if(helper(graph1, graph2, map)) {
                        return true;
                    }
                    delete map[v1];
                    break;
                }
            }
        }
    }
    return false;
}
