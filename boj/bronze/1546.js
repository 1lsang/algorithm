"use strict"

const [[n], scores] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(n, scores) {
    const m = Math.max(...scores);

    return scores.reduce((a, b) => a + (b / m), 0) / n * 100;
}

console.log(solution(n, scores));