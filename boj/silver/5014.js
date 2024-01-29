"use strict"

const [f, s, g, u, d] = require('fs').readFileSync('./dev/stdin').toString().trim().split(' ').map(Number);

function solution(f, s, g, u, d) {
    // s -> g
    const dist = Array.from({ length: f+1 }, () => -1);

    const dx = [u, -1*d];

    const q = [];
    let head = 0;
    let tail = 0;
    const push = (x) => { q[tail++] = x; }
    const pop = () => q[head++];

    push(s);
    dist[s] = 0;

    while (head < tail) {
        const floor = pop();
        for (let dir = 0; dir < 2; dir++) {
            const nf = floor + dx[dir];
            if (nf <= 0 || nf > f) continue;
            if (dist[nf] >= 0) continue;
            dist[nf] = dist[floor] + 1;
            push(nf);
        }
    }

    return dist[g] >= 0 ? dist[g] : 'use the stairs';
}

console.log(solution(f, s, g, u, d));