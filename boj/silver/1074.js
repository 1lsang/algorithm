"use strict"

const [n, r, c] = require('fs').readFileSync('./dev/stdin').toString().trim().split(' ').map(Number);

function func(n, r, c) {
    if (n===0) return 0
    const half = 2 ** (n-1);
    if (r < half && c < half) return func(n-1, r, c);
    if (r < half && c >= half) return half*half + func(n-1, r, c-half);
    if (r >= half && c < half) return 2*half*half + func(n-1, r-half, c);
    return 3*half*half + func(n-1, r-half, c-half);
}

function solution(n, r, c) {   
    return func(n, r, c);
}

console.log(solution(n, r, c));