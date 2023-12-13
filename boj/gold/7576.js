"use strict"

const [[m, n], ...box] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(arr=>arr.split(' ').map(Number));

function solution(m, n, box) {
    const day = Array.from({ length: n }, () => Array.from({length: m}, () => 0));
    const q = [];
    let head = 0, tail = 0;
    const push = (x) => { q.push(x); tail++; };
    const pop = () => q[head++];

    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (box[i][j] === 1) push([i, j])
        }
    }
    
    while (head<tail) {
        const [x, y] = pop();   
        for (let dir = 0; dir < 4; dir++) {
            const nx = x + dx[dir];
            const ny = y + dy[dir];
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            if (box[nx][ny] !== 0) continue;
            push([nx, ny]);
            box[nx][ny] = 1;
            day[nx][ny] = day[x][y] + 1;
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (box[i][j] === 0) return -1;
        }
    }

    return Math.max(...day.map(arr => Math.max(...arr)));
}

console.log(solution(m, n, box));