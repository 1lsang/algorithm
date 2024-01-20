"use strict"

const [x, y, w, h] = require('fs').readFileSync('./dev/stdin').toString().trim().split(' ').map(Number);

function solution(x, y, w, h) {
    return Math.min(Math.min(w-x, x), Math.min(h-y, y));
}

console.log(solution(x, y, w, h));