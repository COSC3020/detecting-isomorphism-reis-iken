const jsc = require('jsverify');
const assert = require('assert');
const fs = require('fs');

eval(fs.readFileSync('code.js')+'');

const examples = [
    {
        graph1: {
            1: [2, 3],
            2: [1, 3],
            3: [1, 2]
        },
        graph2: {
            4: [5, 6],
            5: [4, 6],
            6: [4, 5]
        },
        expected: true
    },
    {
        graph1: {
            1: [2],
            2: [1, 3],
            3: [2]
        },
        graph2: {
            4: [5],
            5: [4, 6],
            6: [5]
        },
        expected: false
    }
];

function testExamples() {
    for (const example of examples) {
        const result = areIsomorphic(example.graph1, example.graph2);
        assert.strictEqual(result, example.expected);
    }
}

testExamples();
