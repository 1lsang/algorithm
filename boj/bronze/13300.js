"use strict"

const [[n, k], ...sy] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(n, k, sy) {
    let answer = 0;
    const students = Array.from({ length: 2 }, () => Array(7).fill(0));
    
    for (let [s, y] of sy) {
        students[s][y] += 1;
    }

    for (let i = 1; i <= 6; i++) {
        answer += Math.ceil(students[0][i]/k);
        answer += Math.ceil(students[1][i]/k);
    }

    return answer;
}

console.log(solution(n, k, sy));