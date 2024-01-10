"use strict"

const [[n], ...schedules] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(n, schedules) {
    let answer = 0;
    let f = 0;

    schedules.sort((a, b) => (a[1] === b[1]) ? a[0] - b[0] : a[1] - b[1]);
    
    for (let i = 0; i < n; i++) {
        if (schedules[i][0] < f) continue;
        f = schedules[i][1];
        answer++;
    }
    
    return answer;
}

console.log(solution(n, schedules));