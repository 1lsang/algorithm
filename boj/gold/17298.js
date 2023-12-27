"use strict"

const [[n], a] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(n, a) {
    const answer = [];
    const s = [];

    for (let i = 0; i < n; i++) {
        while (s.length && a[s.at(-1)] < a[i]) {
            answer[s.pop()] = a[i]
        }
        s.push(i);
    }

    for (let i of s) {
        answer[i] = -1;
    }

    return answer.join(' ');
}

console.log(solution(n, a));