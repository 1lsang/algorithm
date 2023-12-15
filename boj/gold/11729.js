"use strict"

const k = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

function solution(k) {
    const answer = [];

    function move(a, b) {
        answer.push(`${a} ${b}`);
    }

    function hanoi(n, a, b) {
        if (n===1) {
            move(a, b);
            return;
        }
        hanoi(n-1, a, 6-a-b);
        move(a, b);
        hanoi(n-1, 6-a-b, b);
    }

    hanoi(k, 1, 3);
    return [answer.length.toString(), answer.join('\n')].join('\n');
}

console.log(solution(k));