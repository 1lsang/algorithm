"use strict"

const [[n], ...pos] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(n, pos) {
    return pos.sort((a, b) => (a[1] - b[1] === 0) ? a[0] - b[0] : a[1] - b[1]).map(arr => arr.join(' ')).join('\n');
}

console.log(solution(n, pos));