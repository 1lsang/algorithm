"use strict"

const n = Number(require('fs').readFileSync('./dev/stdin').toString().trim());

function solution(n) {
    let cnt = 1;
    let year = 666;
    while (cnt < n) {
        year++;
        if (String(year).includes(666)) cnt++;
    }
    return year;
}

console.log(solution(n));