"use strict"

const [[t], ...inputs] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(t, inputs) {
    const answers = [];

    const dx = [1, 2, 2, 1, -1, -2, -2, -1];
    const dy = [2, 1, -1, -2, -2, -1, 1, 2];
    
    function bfs (l, start, target) {
        const dist = Array.from({ length: l }, () => Array(l).fill(-1));
        const q = [];
        let head = 0; 
        let tail = 0;
        const push = (input) => q[tail++] = input;
        const pop = () => q[head++];

        push(start);
        dist[start[0]][start[1]] = 0;

        while (head < tail) {
            const [x, y] = pop();
            for (let dir = 0; dir < 8; dir++) {
                const nx = x + dx[dir];
                const ny = y + dy[dir];
                if (nx < 0 || nx >= l || ny < 0 || ny >= l) continue;
                if (dist[nx][ny] >= 0) continue;
                push([nx, ny]);
                dist[nx][ny] = dist[x][y] + 1;
                if (nx === target[0] && ny === target[1]) return dist[target[0]][target[1]];
            }
        }
        return dist[target[0]][target[1]];
    }

    for (let i = 0; i < t; i++) {
        answers.push(bfs(inputs[3*i], inputs[1+3*i], inputs[2+3*i]));
    }

    return answers.join('\n');
}

console.log(solution(t, inputs));