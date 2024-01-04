"use strict"

const [n, ...arr] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(Number);

function solution(n, arr) {
    const answer = [];
    const counts = Array.from({ length: 2000001 }, () => 0);
    for (let i of arr) {
        counts[i + 1000000]++;
    }
    counts.forEach((count, idx) => {if (count > 0) answer.push(Array.from({ length: count }, () => idx-1000000).join('\n'))})

    return answer.join('\n')
}

console.log(solution(n, arr));