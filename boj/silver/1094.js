"use strict"

const x = Number(require('fs').readFileSync('./dev/stdin').toString().trim());

function solution(x) {
    let answer = 0;
    let length = 0;
    for (let i = 64; i >= 1; i/=2) {
        if (length + i <= x) {
            length += i;
            answer++;
        }
    }
    return answer;
}

console.log(solution(x));