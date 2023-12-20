"use strict"

const [n, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function solution(n, m) {
    const answer = [];
    const arr = [];

    function bt(k) {
        if (k === m) return answer.push(arr.join(' '));
        for (let i = 1; i <= n; i++) {
            arr.push(i);
            bt(k+1);
            arr.pop(i);
        }
    }

    bt(0);

    return answer.join('\n');
}

console.log(solution(n, m));