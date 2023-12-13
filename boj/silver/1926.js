"use strict"

const [[n, m], ...boards] = require('fs')
.readFileSync('./dev/stdin')
.toString().trim().split('\n')
.map(arr=>arr.split(' ').map(Number));

function solution(n, m, boards) {
    const areas = [];
    const visited = Array.from({length: n}, ()=>Array.from({length: m}, ()=>false));
    
    const q = [];
    let head = 0, tail = 0;
    const push = (x) => { q.push(x); tail++; };
    const pop = () => q[head++];

    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];

    const BFS = (start) => {
        let area = 1;
        visited[start[0]][start[1]] = true;
        push(start);
        while (head<tail) {
            const [x, y] = pop();
            for (let dir = 0; dir < 4; dir++) {
                const nx = x + dx[dir];
                const ny = y + dy[dir];
                if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
                if (visited[nx][ny] || boards[nx][ny]!==1) continue;
                visited[nx][ny] = true;
                area++;
                push([nx, ny]);
            }
        }
        return area;
    };
    
    for(let x = 0; x < n; x++) {
        for (let y =0; y < m; y++) {
            if (boards[x][y]===1 && !visited[x][y]) areas.push(BFS([x, y]));
        }
    }

    return [areas.length, Math.max(0, ...areas)].join('\n');
}

console.log(solution(n, m, boards));