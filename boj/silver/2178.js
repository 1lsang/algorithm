"use strict"

const [numbers, ..._boards] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = numbers.split(' ').map(Number);
const boards = _boards.map(arr=>arr.split('').map(Number));

function solution(n, m, boards) {
    const dist = Array.from({ length: n }, () => Array.from({ length: m }, () => -1));
    const q = [];
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    q.push([0, 0]);
    dist[0][0] = 0;

    while (q.length > 0) {
        const [x, y] = q.shift();
        for (let dir = 0; dir < 4; dir++) {
            const nx = x + dx[dir];
            const ny = y + dy[dir];
            if (nx < 0 || nx >= n || ny < 0 || ny >=m) continue;
            if (boards[nx][ny] === 0 || dist[nx][ny] >= 0) continue;
            dist[nx][ny] = dist[x][y] + 1;
            q.push([nx, ny]);
        }
        if (x === n && y === m) break;
    }
    
    return dist[n-1][m-1] + 1;
}

console.log(solution(n, m, boards));
