"use strict"

const s = Number(require('fs').readFileSync('./dev/stdin').toString().trim());

function solution(s) {
    let i = 0;
    let sum = 0;
    while (sum+i < s) {
        sum += ++i;
    }
    return i;
}

console.log(solution(s));