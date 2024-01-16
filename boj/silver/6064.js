"use strict"

const [[t], ...arr] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(t, arr) {
    const answer = [];

    for (let a = 0; a < t; a++) {
        let [m, n, x, y] = arr[a];
        if (x === m) x = 0;
        if (y === n) y = 0;
        for (let i = x; i <= m * n; i += m) {
            if (i === 0) continue;
            if (i % m === x && i % n === y) {
                answer.push(i);
                break;
            }
        }
        if (answer.length !== a+1) answer.push(-1);
    }

    return answer.join('\n');
}

console.log(solution(t, arr));