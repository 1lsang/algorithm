"use strict"

const [[t], ...inputs] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(t, inputs) {
    const answer = [];
    for (let k = 0; k < t; k++) {
        const [n, m] = inputs[3*k];
        const A = inputs[3*k + 1].sort((a, b) => a - b);
        const B = inputs[3*k + 2].sort((a, b) => a - b);

        let cnt = Array(n).fill(0);
        let j = 0;
        for (let i = 0; i < n; i++) {
            if (i > 0) cnt[i] = cnt[i-1];
            while (j < m && B[j] < A[i]) {
                cnt[i]++;
                j++;
            }
        }
        answer.push(cnt.reduce((a, b) => a+b, 0));
    }
    return answer.join('\n');
}

console.log(solution(t, inputs));
