"use strict"

const [[n, m], arr] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(n, m, arr) {
    const answers = [];
    const answer = [];
    const sorted = arr.sort((a, b) => a - b);
    const isUsed = Array(n).fill(false);

    function bt(k) {
        if (k === m) return answers.push(answer.join(' '));
        let tmp = 0;
        for (let i = 0; i < n; i++) {
            if (!isUsed[i] && tmp !== sorted[i] && (answer.length===0 || answer.at(-1) <= sorted[i])) {
                isUsed[i] = true;
                answer.push(sorted[i]);
                tmp = sorted[i];
                bt(k+1);
                isUsed[i] = false;
                answer.pop();
            }
        }
    }
    
    bt(0);

    return answers.join('\n');
}

console.log(solution(n, m, arr));