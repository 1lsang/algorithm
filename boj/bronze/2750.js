"use strict"

const [n, ...inputs] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(Number);

function solution(inputs) {
    return inputs.sort((a, b) => a-b).join('\n');
}

console.log(solution(inputs));