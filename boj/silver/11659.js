"use strict"

const [[n, m], nums, ...ranges] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(n, m, nums, ranges) {
    const answer = [];

    const d = Array.from({ length: n+1 }, () => 0);

    for (let i = 0; i < n; i++) {
        d[i+1] = d[i] + nums[i];
    }

    for (let [i, j] of ranges) {
        answer.push(d[j] - d[i-1]);
    }
    
    return answer.join('\n');
}

console.log(solution(n, m, nums, ranges));