"use strict"

const [[n, k], ...a] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map((str, i) => i === 0 ? str.split(' ').map(Number) : Number(str));

function solution(n, k, a) {
    let answer = 0;
    for (let i = n-1; i >= 0; i--) {
        answer += parseInt(k/a[i]);
        k %= a[i];
    }
    return answer;
}

console.log(solution(n, k, a));