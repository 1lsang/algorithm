"use strict"

const s = require('fs').readFileSync('./dev/stdin').toString().trim();

function solution(s) {
    const suffixes = []
    for (let i = 0; i < s.length; i++) {
        suffixes.push(s.slice(i, s.length));
    }
    return suffixes.sort().join('\n');
}

console.log(solution(s));