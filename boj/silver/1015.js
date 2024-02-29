"use strict"

const [[n], a] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(n, a) {
    const p = [];
    const origin = [...a];
    const b = a.sort((a, b) => a - b);
    const v = Array(n).fill(false);

    for (let oa of origin) {
        for (let i = 0; i < n; i++) {
            if (!v[i] && oa === b[i]) {
                p.push(i);
                v[i] = true;
                break;
            }
        }
    }

    return p.join(' ');
}

console.log(solution(n, a));