"use strict"

const n = Number(require('fs').readFileSync('./dev/stdin').toString().trim());

function solution(n) {
    let i = 1;
    while (n > i) {
        n -= i;
        i++;
    }

    return i%2 === 1 ? `${i+1-n}/${n}` : `${n}/${i+1-n}`;
}

console.log(solution(n));