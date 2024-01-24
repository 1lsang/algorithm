"use strict"

const [[m, n, k], ...rectangles] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(m, n, k, rectangles) {
    let answer = 0;
    const answers = [];
    const vis = Array.from({ length: m }, () => Array(n).fill(0));

    for (let r = 0; r < k; r++) {
        const [x1, y1, x2, y2] = rectangles[r];
        for (let i = y1; i < y2; i++) {
            for (let j = x1; j < x2; j++) {
                vis[i][j] = 1;
            }
        }
    }

    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];

    const dfs = (start) => {
        let area = 1;

        const q = [];
        let head = 0;
        let tail = 0;
        const push = (input) => q[tail++] = input;
        const pop = () => q[head++];
        
        push(start);
        vis[start[0]][start[1]] = 1;

        while (head < tail) {
            const [x, y] = pop();
            for (let dir = 0; dir < 4; dir++) {
                const nx = x + dx[dir];
                const ny = y + dy[dir];
                if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
                if (vis[nx][ny] !== 0) continue;
                push([nx, ny]);
                area++;
                vis[nx][ny] = 1;
            }
        }

        return area;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (vis[i][j] === 0) {
                answers.push(dfs([i, j]));
                answer++;
            }
        }
    }

    return `${answer}\n${answers.sort((a, b) => a - b).join(' ')}`;
}

console.log(solution(m, n, k, rectangles));