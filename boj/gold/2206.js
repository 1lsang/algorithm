"use strict"

const [[n, m], ...map] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map((str, i) => str.split(i === 0 ? ' ' : '').map(Number));

function solution(n, m, map) {
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];

    const dfs = () => {
        const dist = Array.from({ length: n }, () => Array.from({length: m}, () => Array(2).fill(-1)));
        const q = [];
        let head = 0;
        let tail = 0;
        const push = (x) => q[tail++] = x;
        const pop = () => q[head++];
        push([0, 0, 0]);
        dist[0][0][0] = 1;
        while (head < tail) {
            const [x, y, wall] = pop();
            for (let dir = 0; dir < 4; dir++) {
                const nx = x + dx[dir];
                const ny = y + dy[dir];
                if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
                if (map[nx][ny] === 1 && wall === 1) continue;
                const nwall = map[nx][ny] === 1 ? 1 : wall;
                if (dist[nx][ny][nwall] >= 0) continue;
                push([nx, ny, nwall]);
                dist[nx][ny][nwall] = dist[x][y][wall] + 1;
            }
        }

        return (dist[n-1][m-1].every(a => a === -1)) ? -1 : Math.min(...dist[n-1][m-1].filter(a => a > 0));
    }

    return dfs();
}

console.log(solution(n, m, map));