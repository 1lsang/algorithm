"use strict"

const [a, b, n] = require('fs').readFileSync('./dev/stdin').toString().trim().split(' ').map(Number);

function solution(a, b, n) {
    for (let i = 0; i < n; i++) {
        a = a % b * 10;
    }
    return Math.floor(a / b);
}

console.log(solution(a, b, n));