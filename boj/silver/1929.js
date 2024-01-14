"use strict"

const [m, n] = require('fs').readFileSync('./dev/stdin').toString().trim().split(' ').map(Number);

function solution(m, n) {
    const answer = [];
    const arr = Array(n+1).fill(true);
    arr[0] = false;
    arr[1] = false;

    for (let i = 2; i*i <= n; i++) {
        if (!arr[i]) continue;
        for (let j = i*i; j <= n; j+=i) {
            arr[j] = false;
        }
    }

    for (let i = m; i <= n; i++) {
        if (arr[i]) answer.push(i);
    }

    return answer.join('\n')
}

console.log(solution(m, n));