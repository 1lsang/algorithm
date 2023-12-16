"use strict"

const [n_str, ...boards_str] = require('fs').readFileSync('/dev/stdin')
  .toString().trim().split('\n');

const n = Number(n_str);
const boards = boards_str.map(arr=>arr.split('').map(Number))

function solution(n, boards) {
  const answer = [];
  const s = [];
  const vis = Array.from({ length: n }, () => Array.from({ length: n }, () => false));
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  
  const dfs = (start) => {
    let cnt = 1;
    s.push(start);
    vis[start[0]][start[1]] = true;
    while (s.length > 0) {
      const [x, y] = s.pop();
      for (let dir = 0; dir < 4; dir++) {
        const nx = x + dx[dir];
        const ny = y + dy[dir];
        if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
        if (boards[nx][ny] === 0 || vis[nx][ny]) continue;
        vis[nx][ny] = true;
        cnt++;
        s.push([nx, ny]);
      }
    }
    return cnt;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (boards[i][j] === 1 && !vis[i][j]) answer.push(dfs([i, j]));
    }
  }

  return [answer.length.toString(), answer.sort((a,b) => a-b).join('\n')].join('\n');
}

console.log(solution(n, boards));