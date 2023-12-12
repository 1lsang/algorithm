"use strict"

const [A, B, C] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function solution(A, B, C) {
    const answer = Array.from({ length: 10 }, () => 0);
    const result = String(A * B * C);
    for(let n of result) {
        answer[Number(n)]++;
    }
    return answer.join('\n');
}

console.log(solution(A, B, C));