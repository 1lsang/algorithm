"use strict"

const [[n, m], arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(n, m, arr) {
    const answers = [];
    const answer = [];
    const sArr = arr.sort((a,b)=>a-b);
    const isUsed = Array(n).fill(false);
    
    function bt(k) {
        if (k === m) return answers.push(answer.join(' '));
        for (let i = 0; i < n; i++) {
            if (!isUsed[i]) {
                answer.push(sArr[i]);
                isUsed[i] = true;
                bt(k+1);
                answer.pop();
                isUsed[i] = false;
            }
        }
    }

    bt(0);

    return answers.join('\n');
}

console.log(solution(n, m, arr));