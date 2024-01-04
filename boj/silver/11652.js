"use strict"

const [n, ...cards] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(BigInt);

function solution(n, cards) {
    const cnts = new Map();
    for (let card of cards) {
        if (cnts.get(card)) cnts.set(card, cnts.get(card) + 1);
        else cnts.set(card, 1);
    }
    return [...cnts.keys()].sort((a, b) => a - b < 0n ? -1 : 1).reduce((answer, key, idx) => {
        if (idx === 0) return key;
        if (cnts.get(key) > cnts.get(answer)) return key;
        else if (cnts.get(key) === cnts.get(answer)) {
            if (key < answer) return key;
            else return answer;
        }
        else return answer;
    }, 0).toString();
}

console.log(solution(n, cards));

