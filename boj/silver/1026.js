"use strict"

const [[n], a, b] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(n, a, b) {
    let answer = 0;

    a.sort((x, y) => x - y);
    b.sort((x, y) => y - x);

    for (let i = 0; i < n; i++) {
        answer += a[i] * b[i];
    }

    return answer;
}

console.log(solution(n, a, b))