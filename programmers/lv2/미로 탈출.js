function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    const dist = Array.from({ length : n }, () => Array(m).fill(0));
    
    const start = [];
    const lever = [];
    const end = [];
    
    for (let i = 0; i < n ; i++) {
        for (let j = 0 ; j < m; j++) {
            if (maps[i][j] === 'S') start.push(i, j);
            else if (maps[i][j] === 'L') lever.push(i, j);
            else if (maps[i][j] === 'E') end.push(i, j);
            else if (maps[i][j] === 'X') dist[i][j] = -1;
        }
    }
    
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    
    function bfs(start, end) {
        const q = [];
        let head = 0;
        let tail = 0;
        const push = (x) => q[tail++] = x;
        const pop = () => q[head++];
        
        const vis = Array.from({ length : n }, () => Array(m).fill(false));
        
        push(start);
        vis[start[0]][start[1]] = true;
        
        while (head < tail) {
            const [x, y] = pop();
            for (let dir = 0; dir < 4; dir++) {
                const nx = x + dx[dir];
                const ny = y + dy[dir];
                if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
                if (vis[nx][ny] || dist[nx][ny] === -1) continue;
                push([nx, ny]);
                vis[nx][ny] = true;
                dist[nx][ny] = dist[x][y] + 1;
                if (nx === end[0] && ny === end[1]) return true;
            }
        }
        return false;
    }
    
    let success = false;
    if (bfs(start, lever)) success = bfs(lever, end);
    
    return success ? dist[end[0]][end[1]] : -1;
}