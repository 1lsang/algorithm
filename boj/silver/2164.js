"use strict"

const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

function solution(n) {
    const cards = Array.from({length: n}, (_, i) => i+1);
    let head = 0;
    let tail = n;

    while (tail-head>1) {
        head++;
        cards.push(cards[head++]);
        tail++;
    }

    return cards[head];
}

console.log(solution(n));