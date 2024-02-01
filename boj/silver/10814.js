"use strict"

const [[n], ...members] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map((a, i) => i===0 ? Number(a) : a));

function solution(n, members) {
    return members.sort((m1, m2) => m1[0] - m2[0]).map(m => m.join(' ')).join('\n');
}

console.log(solution(n, members));