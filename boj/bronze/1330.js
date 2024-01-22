"use strict"

const [a, b] = require('fs').readFileSync('./dev/stdin').toString().trim().split(' ').map(Number);

function solution(a, b) {
    if (a > b) return '>';
    else if (a < b) return '<';
    else return '==';
}

console.log(solution(a, b));
