"use strict"

const [n, ...stairs] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(Number);

function solution(n, stairs) {
    const score1 = Array(n+1).fill(0);
    const score2 = Array(n+1).fill(0);

    score1[1] = stairs[0];
    score2[1] = stairs[0];

    for (let i = 2; i <= n; i++) {
        score1[i] = score2[i-1] + stairs[i-1];
        score2[i] = Math.max(score1[i-2], score2[i-2]) + stairs[i-1];
    }
    
    return Math.max(score1[n], score2[n]);
}

console.log(solution(n, stairs));
