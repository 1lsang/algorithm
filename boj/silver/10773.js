"use strict"

const [K, ...inputs] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function solution(inputs) {
    const s = [];
    for (let input of inputs) {
        if (input===0) s.pop();
        else s.push(input);
    }
    return s.reduce((a, b) => a + b, 0);
}

console.log(solution(inputs));