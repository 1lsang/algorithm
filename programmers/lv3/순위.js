"use strict"

function solution(n, results) {
    let answer = 0;
    
    const win = Array.from({ length : n+1 }, () => []);
    const lose = Array.from({ length : n+1 }, () => []);
    
    function bfs(graph, start) {
        const q = [];
        let head = 0;
        let tail = 0;
        const push = (x) => q[tail++] = x;
        const pop = () => q[head++];
        const vis = Array(graph.length+1).fill(false);
        
        push(start);
        vis[start] = true;
        
        let cnt = 0;
        
        while (head < tail) {
            const n = pop();
            for (let nn of graph[n]) {
                if (vis[nn]) continue;
                vis[nn] = true;
                push(nn);
                cnt++;
            }
        }
        
        return cnt;
    }
    
    for (let [a, b] of results) {
        win[a].push(b);
        lose[b].push(a);
    }
    
    for (let i = 1; i <= n; i++) {
        if (bfs(win, i) + bfs(lose, i) === n - 1) answer++;
    }
    
    return answer;
}