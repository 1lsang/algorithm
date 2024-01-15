"use strict"

const n = Number(require('fs').readFileSync('./dev/stdin').toString().trim());

function solution(n) {
    let cnt2 = 0;
    let cnt5 = 0;

    for (let i = 1; i <= n; i++) {
        let num = i;
        while (num % 2 === 0) {
            num /= 2;
            cnt2++;
        }
        while (num % 5 === 0) {
            num /= 5;
            cnt5++;
        }
    }

    return Math.min(cnt2, cnt5);
}

console.log(solution(n));