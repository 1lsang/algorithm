"use strict"

const [n, ...h] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(Number);

function solution(n, h) {
    let answer = 0;
    const s = [];
    for (let i = 0; i < n; i++) {
        while (s.length && s.at(-1) <= h[i]) s.pop();
        answer += s.length;
        s.push(h[i]);
    }

    return answer;
}

console.log(solution(n, h));