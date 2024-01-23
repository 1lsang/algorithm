"use strict"

const [n, m, s] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map((str, idx) => (idx === 0 || idx === 1) ? Number(str) : str);

function solution(n, m, s) {
    let start = 0;
    const IO = ['I', 'O'];
    const ios = [];
    
    for (let i = 0; i < m; i++) {
        if (start === 0) {
            if (s[i] === 'I') start++;
            continue;
        }
        if (s[i] === IO[start % 2]) {
            start++;
        }
        else {
            ios.push(start);
            start = 0;
            i--;
        }
    }

    if (start > 0) ios.push(start);
    
    return ios.reduce((a, b) => a + Math.max(0, Math.floor((b - (2*n+1))/2) + 1), 0);
}

console.log(solution(n, m, s));