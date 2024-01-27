"use strict"

const [[n, m], ...map] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(n, m, map) {
    let year = 1;

    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];

    function dfs(start, vis) {
        const s = [];

        s.push([...start]);
        vis[start[0]][start[1]];

        while (s.length > 0) {
            const [x, y] = s.pop();
            for (let dir = 0; dir < 4; dir++) {
                const nx = x + dx[dir];
                const ny = y + dy[dir];
                if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
                if (vis[nx][ny] || map[nx][ny] === 0) continue;
                s.push([nx, ny]);
                vis[nx][ny] = true;
            }
        }
    }
    
    while (!map.map(arr => arr.every(a => a === 0)).every(a => a === true)) {
        const count = Array.from({ length: n }, () => Array(m).fill(0));
        const vis = Array.from({ length: n }, () => Array(m).fill(false));

        // 빙산 녹음
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (map[i][j] === 0) continue;
                for (let dir = 0; dir < 4; dir++) {
                    const nx = i + dx[dir];
                    const ny = j + dy[dir];
                    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
                    if (map[nx][ny] === 0) count[i][j]++;
                }
            }
        }

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                map[i][j]=Math.max(map[i][j] - count[i][j], 0);
            }
        }
        
        let search = false;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (vis[i][j] || map[i][j] === 0) continue;
                if (search) return year;
                dfs([i, j], vis);
                search = true;
            }
        }

        year++;
    }

    return 0;    
}

console.log(solution(n, m, map));
