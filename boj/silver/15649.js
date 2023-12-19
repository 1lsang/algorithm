"use strict"

const [n, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function solution(n, m) {
    const answer = [];
    const arr = Array.from({length: m});
    const isUsed = Array.from({length: n}, ()=>false);

    function backTracking(k) {
        if (k===m) {
            answer.push(arr.join(' '));
            return;
        }
        for (let i = 0; i<n; i++) {
            if(!isUsed[i]) {
                arr[k] = i+1;
                isUsed[i] = true;
                backTracking(k+1);
                isUsed[i] = false;
            }
        }
    }

    backTracking(0);
    
    return answer.join('\n');
}

console.log(solution(n, m))