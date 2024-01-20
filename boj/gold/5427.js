"use strict"

const [t, ...inputs] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map((str, idx) => (idx === 0) ? Number(str) : str);

const wh = [];
const maps = [];

for (let i = 0; i < inputs.length; ) {
    const [w, h] = inputs[i++].split(' ').map(Number);
    wh.push([w, h]);
    maps.push(inputs.slice(i, i+h).map(str => str.split('')));
    i += h;
}

class Q {
    q;
    head;
    tail;

    constructor() {
        this.q = [];
        this.head = 0;
        this.tail = 0;
    }

    push = (pos) => {
        this.q.push(pos); 
        this.tail++;
    }
    pop = () => this.q[this.head++];
    empty = () => this.head >= this.tail;
}

function solution(t, wh, maps) {
    const answers = [];

    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];

    function escape (map, w, h) {
        const q1 = new Q();
        const q2 = new Q();

        const board = Array.from({ length: h }, () => Array(w).fill(0)); 
        const visF = Array.from({ length: h }, () => Array(w).fill(0));
        const visS = Array.from({ length: h }, () => Array(w).fill(0));
        
        for (let i = 0; i < h; i++) {
            for (let j = 0; j < w; j++) {
                if (map[i][j] === '#') {
                    board[i][j] = -1;
                }
                else if (map[i][j] === '*') {
                    q1.push([i, j]);
                    visF[i][j] = 1;
                }
                else if (map[i][j] === '@') {
                    q2.push([i, j]);
                    visS[i][j] = 1;
                }
            }
        }
        while (!q1.empty()) {
            const [x, y] = q1.pop();   
            for (let dir = 0; dir < 4; dir++) {
                const nx = x + dx[dir];
                const ny = y + dy[dir];
                if (nx < 0 || nx >= h || ny < 0 || ny >= w) continue;
                if (board[nx][ny] === -1 || visF[nx][ny]) continue;
                q1.push([nx, ny]);
                visF[nx][ny] = visF[x][y] + 1;
            }
        }

        while (!q2.empty()) {
            const [x, y] = q2.pop();
            for (let dir = 0; dir < 4; dir++) {
                const nx = x + dx[dir];
                const ny = y + dy[dir];
                if (nx < 0 || nx >= h || ny < 0 || ny >= w) return visS[x][y];
                if (board[nx][ny] === -1 || visS[nx][ny] || (visF[nx][ny] != 0 && visF[nx][ny] <= visS[x][y] + 1)) continue;
                q2.push([nx, ny]);
                visS[nx][ny] = visS[x][y] + 1;
            }
        }

        return 'IMPOSSIBLE'
    }

    for (let i = 0; i < t; i++) {
        answers.push(escape(maps[i], ...wh[i]));
    }

    return answers.join('\n');
}

console.log(solution(t, wh, maps));