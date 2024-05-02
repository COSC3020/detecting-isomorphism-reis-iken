let fs = require('fs');
let assert = require('assert')
eval(fs.readFileSync('code.js')+'');
let testCases = [
    {
        graph1: [ [5 , 7], [3 , 9], [4 , 8], [1 , 6 , 2], [8], ],
        graph2: [ [6], [6 , 4], [7 , 9], [8 , 5], [3 , 4 , 2], ],
        expectResult: true,
    },
  
    {
        graph1: [ [3 , 6], [5 , 8], [4 , 7], [9 , 2 , 1], [7], ],
        graph2: [ [7], [6, 4], [8, 2, 3], [5], [3, 9, 1], [7], [9], ],
        expectResult: false,
    },
  
    {
        graph1: [ [2], [1, 3], [2, 4, 6], [3], [3, 7, 8], [6], [5], ],
        graph2: [ [4], [3], [5, 7, 8], [2, 1, 5], [3, 2, 6], [5], [3], ],
        expectResult: true,
    },
  
    {
        graph1: [ [8 , 9], [6 , 2], [7 , 1], [4 , 5 , 3], [1], ],
        graph2: [ [6 , 9], [8 , 4], [5 , 3], [2 , 7 , 1], [4, 8], ],
        expectResult: false,
    },
  
];

function runTests(testCase) {
    let allPassed = true; 
    for (const thisCase of testCase) {
        let { graph1, graph2, expectResult } = thisCase;
        let actualResult = are_isomorphic(graph1, graph2);
        if (actualResult !== expectResult) {
            console.error(`Test Case Failed:`);
            console.error(`  - Graph 1: ${JSON.stringify(graph1)}`);
            console.error(`  - Graph 2: ${JSON.stringify(graph2)}`);
            console.error(`  - Expected Result: ${expectResult}`);
            console.error(`  - Actual Result: ${actualResult}`);
            allPassed = false;
        }
    }
    return allPassed;
}

assert(runTests(testCases));
