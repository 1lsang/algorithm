function solution(board) {
    let answer = 0;
    
    const n = board.length;
    const m = board[0].length;
    const dist = Array.from({ length: n }, () => Array(m).fill(0));
    
    const start = [];
    const end = [];
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === 'D') dist[i][j] = -1;
            else if (board[i][j] === 'R') start.push(i, j);
            else if (board[i][j] === 'G') end.push(i, j);
        }
    }
    
    const q = [];
    let head = 0;
    let tail = 0;
    const push = (x) => q[tail++] = x;
    const pop = () => q[head++];
    
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];

    push(start);
    
    while (head < tail) {
        const [x, y] = pop();
        for (let dir = 0; dir < 4; dir++) {
            let nx = x;
            let ny = y;
            while (!(nx + dx[dir] < 0 || nx + dx[dir] >= n || ny + dy[dir] < 0 || ny + dy[dir] >= m || dist[nx+dx[dir]][ny+dy[dir]] === -1)) {
                nx += dx[dir];
                ny += dy[dir];
            }
            if (dist[nx][ny] > 0) continue;
            if (nx === start[0] && ny === start[1]) continue;
            dist[nx][ny] = dist[x][y] + 1;
            push([nx, ny]);
            if (nx === end[0] && ny === end[1]) break;
        }
    }
    
    if (dist[end[0]][end[1]] === 0) return -1;
    return dist[end[0]][end[1]];
}