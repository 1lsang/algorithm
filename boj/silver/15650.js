"use strict"

const [n, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function solution(n, m) {
    const answer = [];
    const isUsed = Array(n+1).fill(false);
    const arr = [];

    function backTracking(k) {
        if (k === m) return answer.push(arr.join(' '));
        for (let i = 1; i <= n; i++) {
            if (!isUsed[i] && (arr.length===0 || i>arr.at(-1))) {
                arr.push(i);
                isUsed[i] = true;
                backTracking(k+1);
                arr.pop(i);
                isUsed[i] = false;
            }
        }
    }

    backTracking(0);

    return answer.join('\n');
}

console.log(solution(n, m));