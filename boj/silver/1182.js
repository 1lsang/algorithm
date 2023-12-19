"use strict"

const [[n, s], inputs] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(n, s, inputs) {
    let answer = 0;

    function backTracking(k, sum) {
        if (k === n) {
            if (sum === s) answer++;
            return;
        }
        backTracking(k+1, sum);
        backTracking(k+1, sum+inputs[k]);
    }

    backTracking(0, 0);

    if (s == 0) answer--;

    return answer;
}

console.log(solution(n, s, inputs));