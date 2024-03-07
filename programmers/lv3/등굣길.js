"use strict"

function solution(m, n, puddles) {
    const md = 1000000007;
    // 1. 테이블 정의하기
    // dist[x][y]: (x, y)까지 가는 최단 거리의 개수
    const dist = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
    
    // 2. 점화식 찾기
    // dist[i][j] = ((dist[i-1][j] > 0 ? dist[i-1][j] : 0) % md + (dist[i][j-1] > 0 ? dist[i][j-1] : 0) % md) % md;              
    // 3. 초기값 정하기
    for (let i = 1; i <= n; i++) {
        dist[i][1] = 1;
    }
    
    for (let j = 1; j <= m; j++) {
        dist[1][j] = 1;
    }
    
    puddles.forEach(([x, y]) => dist[y][x] = -1);
    
    // 4. 실행
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (i === 1 && j === 1) continue;
            if (dist[i][j] === -1) continue;
            dist[i][j] = ((dist[i-1][j] > 0 ? dist[i-1][j] : 0) % md + (dist[i][j-1] > 0 ? dist[i][j-1] : 0) % md) % md;
        }
    }
    
    return dist[n][m];
}