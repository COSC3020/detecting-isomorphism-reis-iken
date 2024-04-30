let fs = require('fs');
let jsc = require('jsverify');
eval(fs.readFileSync('code.js')+'');

let testIsomorphic = jsc.forall(
    jsc.dict(jsc.array(jsc.nat)),
    jsc.dict(jsc.array(jsc.nat)),
    function(graph1, graph2) {
        let adjList1 = {};
        let adjList2 = {};
        for (let node in graph1) {
            adjList1[node] = graph1[node];
        }
        for (let node in graph2) {
            adjList2[node] = graph2[node];
        }
        let result = are_isomorphic(adjList1, adjList2);
        function isIsomorphic(graph1, graph2) {
            return false;
        }
        return result === isIsomorphic(graph1, graph2);
    }
);

jsc.assert(testIsomorphic);
