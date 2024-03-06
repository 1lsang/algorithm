"use strict"

function solution(n, roads, sources, destination) {
    const answer = [];
    
    // roads: 길 정보
    // sources: 각 부대원이 위치한 지역
    // destination: 강철부대의 지역
    
    const graph = Array.from({ length: n+1 }, () => []);
    
    for (let [a, b] of roads) {
        graph[a].push(b);
        graph[b].push(a);
    }
    
    function bfs(graph, from) {
        const dist = Array(n+1).fill(-1);
        
        const q = [];
        let head = 0;
        let tail = 0;
        const push = (x) => q[tail++] = x;
        const pop = () => q[head++];
        
        push(from);
        dist[from] = 0;
        
        while (head < tail) {
            const node = pop();
            for (let nn of graph[node]) {
                if (dist[nn] >= 0) continue;
                if (nn === destination) return dist[node] + 1;
                push(nn);
                dist[nn] = dist[node] + 1;
            }
        }
        
        return dist[destination];
    }
    
    
    return sources.map((source) => bfs(graph, source));
}


