"use strict"

const [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function solution (n, k) {
    const dist = Array.from({ length: 100001 }, () => -1);
    
    const q = [];
    let head = 0;
    let tail = 0;
    const push = (x) => { q.push(x); tail++; };
    const pop = () => q[head++];
    const functions = [(x) => x-1, (x) => x+1, (x) => x*2];

    push(n);
    dist[n] = 0;

    if (n===k) return 0;

    while (head < tail) {
        const pos = pop();
        for (let i = 0; i < 3; i++) {
            const npos = functions[i](pos);
            if (npos === k) return dist[pos] + 1;
            if (npos < 0 || npos > 100000) continue;
            if (dist[npos] > -1) continue;
            dist[npos] = dist[pos] + 1;
            push(npos);
        }
    }
}

console.log(solution(n, k));