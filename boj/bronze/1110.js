"use strict"

const n = Number(require('fs').readFileSync('./dev/stdin').toString().trim());

function solution(n) {
    let cycle = 0;
    let prev = n;
    
    do {
        cycle++;
        prev = Number(String(prev).at(-1) + String(String(prev).padStart(2, '0').split('').reduce((a, b) => a + Number(b), 0)).at(-1));
    } while (prev !== n)

    return cycle;    
}

console.log(solution(n));