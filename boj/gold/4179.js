"use strict"

const [[r, c], ...boards] = require('fs').readFileSync('/dev/stdin')
    .toString().trim().split('\n')
    .map((arr, idx) => arr.split((idx === 0) ? ' ' : ''));

function solution(r, c, boards) {
    const fMap = Array.from({ length: r }, () => Array.from({ length: c }, () => -1));

    const q = [];
    let head = 0;
    let tail = 0;
    const push = (x) => { q.push(x); tail++; }
    const pop = () => q[head++];

    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (boards[i][j] === 'F') {
                push([i, j]);
                fMap[i][j] = 0;
            }
        }
    }

    // BFS
    while (head<tail) {
        const [x, y] = pop();
        for (let dir = 0; dir < 4; dir++) {
            const nx = x + dx[dir];
            const ny = y + dy[dir];
            if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue;
            if (boards[nx][ny] === '#' || fMap[nx][ny] > -1) continue;
            fMap[nx][ny] = fMap[x][y]+1;
            push([nx, ny]);
        }
    }

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (boards[i][j] === 'J') {
                push([i, j]);
                fMap[i][j] = 0;
            }
        }
    }
    
    while (head<tail) {
        const [x, y] = pop();
        for (let dir = 0; dir < 4; dir++) {
            const nx = x + dx[dir];
            const ny = y + dy[dir];
            if (nx < 0 || nx >= r || ny < 0 || ny >= c) return fMap[x][y] + 1;
            if (boards[nx][ny] !== '.' || (fMap[nx][ny] <= fMap[x][y]+1 && fMap[nx][ny]!==-1)) continue;
            fMap[nx][ny] = fMap[x][y]+1;
            push([nx, ny]);
        }
    }
    
    return 'IMPOSSIBLE';
}

console.log(solution(r, c, boards));