"use strict"

const [n, ...input] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(Number);

function solution(n, input) {
    return input.sort((a, b) => b - a).join('\n');
}

console.log(solution(n, input));