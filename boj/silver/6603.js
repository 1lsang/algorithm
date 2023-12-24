"use strict"

const tcs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number)).slice(0, -1);

function solution(tcs) {
    const answers = [];

    for (let tc of tcs) {
        const answer = [];
        const arr = [];
        const k = tc[0];
        const isUsed = Array(k).fill(false);
        function bt(t) {
            if (t === 6) return answer.push(arr.join(' '));
            for (let i = 0; i < k; i++) {
                if (!isUsed[i] && (arr.length === 0 || arr.at(-1) <= tc[i+1])) {
                    isUsed[i] = true;
                    arr.push(tc[i+1]);
                    bt(t+1);
                    isUsed[i] = false;
                    arr.pop();
                }
            }
        }
        
        bt(0);

        answers.push(answer.join('\n'));
    }

    return answers.join('\n\n');
}

console.log(solution(tcs));