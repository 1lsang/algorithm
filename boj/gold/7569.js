"use strict"

const [[m, n, h], ...inputs] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));
const tomatoes = [];
for (let i = 0; i < h; i++) {
    tomatoes.push(inputs.slice(n * i, n * (i + 1)));
}

function solution (m, n, h, tomatoes) {
    let answer = 0;
    const dist = Array.from({ length: h }, () => Array.from({ length: n }, () => Array(m).fill(-1)));
    
    const dx = [1, 0, 0, -1, 0, 0];
    const dy = [0, 1, 0, 0, -1, 0];
    const dz = [0, 0, 1, 0, 0, -1];

    const q = [];
    let head = 0;
    let tail = 0;
    const push = (x) => { q.push(x); tail++; };
    const pop = () => q[head++];

    function bfs(starts) {
        for (let start of starts) {
            push(start);
            dist[start[2]][start[1]][start[0]] = 0;
        }
        while (head < tail) {
            const [ x, y, z ] = pop();
            for (let i = 0; i < 6; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                const nz = z + dz[i];
                if (nx < 0 || nx >= m || ny < 0 || ny >= n || nz < 0 || nz >= h) continue;
                if (dist[nz][ny][nx] >= 0 || tomatoes[nz][ny][nx] === -1) continue;
                push([nx, ny, nz]);
                dist[nz][ny][nx] = dist[z][y][x] + 1;
                answer = Math.max(answer, dist[nz][ny][nx]);
                tomatoes[nz][ny][nx] = 1;
                answer = dist[nz][ny][nx];
            }
        }
    }

    const starts = [];

    for (let k = 0; k < h; k++) {
        for (let j = 0; j < n; j++) {
            for (let i = 0; i < m; i++) {
                if (tomatoes[k][j][i] === 1) starts.push([i, j, k]);
            }
        }
    }

    if (starts.length !== 0) bfs(starts);

    for (let k = 0; k < h; k++) {
        for (let j = 0; j < n; j++) {
            for (let i = 0; i < m; i++) {
                if (tomatoes[k][j][i] === 0) return -1;
            }
        }
    }

    return answer;
}

console.log(solution(m, n, h, tomatoes));