"use strict"

const n = Number(require('fs').readFileSync('./dev/stdin').toString().trim())

function solution(n) {
    const answer = [];
    for (let i = 2; i * i <= n; i++) {
        while(n % i === 0) {
            answer.push(i);
            n /= i;
        }
    }

    if (n !== 1) answer.push(n);

    return answer.join('\n');
}

console.log(solution(n));