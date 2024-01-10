"use strict"

const [n, ...weights] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(Number);

function solution(n, weights) {
    let answer = 0;

    weights.sort((a, b) => a - b);
    
    for (let i = 0; i < n; i++) {
        answer = Math.max(answer, weights[i] * (n-i));
    }

    return answer;
}

console.log(solution(n, weights));