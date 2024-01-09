"use strict"

const n = Number(require('fs').readFileSync('./dev/stdin').toString().trim());

function solution(n) {
    const d = Array(n+1).fill(0);
    const pre = Array(n+1).fill(0);
    const answer = [];

    for (let i = 2; i <= n; i++) {
        d[i] = d[i-1] + 1;
        pre[i] = i-1;
        if (i%3 === 0 && d[i] > d[i/3] + 1) {
            d[i] = d[i/3] + 1;
            pre[i] = i/3;
        }
        if (i%2 === 0 && d[i] > d[i/2] + 1) {
            d[i] = d[i/2] + 1;
            pre[i] = i/2;
        }
    }

    for (let i = n; i > 0; i = pre[i]) {
        answer.push(i);
    }

    return `${d[n]}\n${answer.join(' ')}`;
}

console.log(solution(n));