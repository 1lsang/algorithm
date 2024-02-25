"use strict"

const s = require('fs').readFileSync('./dev/stdin').toString().trim();

function solution(s) {
    return s.split('-').map(str => str.split('+').map(Number).reduce((a, b) => a + b)).reduce((a, b, i) => i === 0 ? a + b : a - b, 0);
}

console.log(solution(s));