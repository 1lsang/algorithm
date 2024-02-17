"use strict"

const [[l], s, [n]] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(l, s, n) {
    let sep = -1;
    s.sort((a, b) => a - b);
    if (l === 1) return 0;
    for (let i = 0; i < l-1; i++) {
        if (s[i] === n) return 0;
        if (s[i] < n && s[i+1] > n) {
            sep = i;
            break;
        }
    }
    if (sep === -1) return n * (s[0] - n) - 1;
    
    return (n - s[sep]) * (s[sep+1] - n) - 1;
}

console.log(solution(l, s, n));
