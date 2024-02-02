"use strict"

const [[n], ...pos] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(n, pos) {
    return pos.sort((p1, p2) => p1[0] === p2[0] ? p1[1] - p2[1] : p1[0] - p2[0]).map(p => p.join(' ')).join('\n');
}

console.log(solution(n, pos))