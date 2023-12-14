"use strict"
const [T_str, ...inputs] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let cnt = 0;
const T = Number(T_str)
const tc = [];

for (let i = 0; i < T; i++) {
    const [M, N, K] = inputs[cnt+i].split(' ').map(Number);
    const boards = Array.from({length: M}, ()=>Array.from({length: N}, ()=>0));
    for (let j = 1; j <= K; j++) {
        const [x, y] = inputs[cnt+i+j].split(' ');
        boards[x][y] = 1;        
    }
    tc.push([M, N, boards]);
    cnt += K;
}


function solution(tc) {
    const answer = [];
    
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0 , -1];
    
    for (let [M, N, boards] of tc) {
        const s = [];
        const visited = Array.from({length: M}, ()=>Array.from({length: N}, ()=>false));
        let cnt = 0;
        for (let i = 0; i < M; i++) {
            for (let j = 0; j < N; j++) {
                if (boards[i][j] === 1 && !visited[i][j]) {
                    s.push([i, j]);
                    visited[i][j] = true;
                    while (s.length > 0) {
                        const [x, y] = s.pop();
                        for (let dir = 0; dir < 4; dir++) {
                            const nx = x + dx[dir];
                            const ny = y + dy[dir];
                            if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue;
                            if (visited[nx][ny] || boards[nx][ny] !== 1) continue;
                            visited[nx][ny] = true;
                            s.push([nx, ny]);
                        }
                    }
                    cnt++;
                }
            }
        }
        answer.push(cnt);
    }

    return answer.join('\n');
}

console.log(solution(tc));