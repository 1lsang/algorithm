"use strict"

const n = require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(n) {
    return n.split('').map(Number).sort((a, b) => b - a).join('');
}

console.log(solution(n));