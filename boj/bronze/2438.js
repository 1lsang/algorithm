"use strict"

const n = Number(require('fs').readFileSync('./dev/stdin').toString().trim());

function solution(n) {
    const answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push('*'.repeat(i));
    }
    return answer.join('\n');
}

console.log(solution(n));