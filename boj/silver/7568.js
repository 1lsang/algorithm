"use strict"

const [[n], ...wh] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(n, wh) {
    const 덩치 = Array(n).fill(1);
    for (let i = 0; i < n; i++) {
        const [w1, h1] = wh[i];
        for (let j = 0; j < n; j++) {
            const [w2, h2] = wh[j];
            if (w1 > w2 && h1 > h2) 덩치[j]++;
        }
    }
    return 덩치.join(' ');
}

console.log(solution(n, wh));