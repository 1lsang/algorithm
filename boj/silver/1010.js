"use strict"

const [[t], ...tc] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(t, tc) {
    const answers = [];

    for (let i = 0; i < t; i++) {
        const [n, m] = tc[i];
        answers.push(parseInt(Array.from({ length: n }, (_, i) => BigInt(m - i)).reduce((a, b) => a * b, 1n)/Array.from({ length: n }, (_, i) => BigInt(n - i)).reduce((a, b) => a * b, 1n)));
    }

    return answers.join('\n');
}

console.log(solution(t, tc));