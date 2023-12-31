"use strict"

const [n, ...picture] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((str, idx) => (idx === 0) ? Number(str) : str.split(''));

function solution(n, picture) {
    const answer = [0, 0];
    
    // 적녹 색약이 보는 그림
    const picture2 = picture.map(arr => arr.map(color => (color === 'G') ? 'R' : color));

    // dfs를 위한 방문 배열
    const visited1 = Array.from({ length: n }, () => Array.from({ length: n }, () => false));
    const visited2 = Array.from({ length: n }, () => Array.from({ length: n }, () => false));

    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];

    // DFS로 탐색 (방문만 확인하면 되므로)
    function dfs([sx, sy], picture, visited) {
        const s = [];
        s.push([sx, sy]);
        while (s.length > 0) {
            const [x, y] = s.pop();
            for (let dir = 0; dir < 4; dir++) {
                const nx = x + dx[dir];
                const ny = y + dy[dir];
                if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
                if (visited[nx][ny] || picture[nx][ny] !== picture[sx][sy]) continue;
                visited[nx][ny] = true;
                s.push([nx, ny]);
            }
        }
    }

    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // 적록색약이 아닌 사람이 봤을 때
            if (!visited1[i][j]) {
                dfs([i, j], picture, visited1);
                answer[0]++;
            }
            // 적록색약인 사람이 봤을 때
            if (!visited2[i][j]) {
                dfs([i, j], picture2, visited2);
                answer[1]++;
            }
        }
    }
    
    return answer.join(' ');
}

console.log(solution(n, picture));