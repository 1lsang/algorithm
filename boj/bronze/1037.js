"use strict"

const [[n], arr] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(n, arr) {
    arr.sort((a, b) => a-b);
    return arr[0] * arr.at(-1);
}

console.log(solution(n, arr));