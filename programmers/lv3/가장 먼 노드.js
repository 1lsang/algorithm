function solution(n, edge) {
    const graph = [];
    
    edge.forEach(([from, to]) => {
        if (graph[from]) graph[from].push(to);
        else graph[from] = [to];
        if (graph[to]) graph[to].push(from);
        else graph[to] = [from];
    })
    
    function bfs() {
        const dist = Array.from({ length: graph.length }, () => -1);
        const q = [];
        let head = 0;
        let tail = 0;
        const push = (x) => q[tail++] = x;
        const pop = () => q[head++];
        push(1);
        dist[1] = 0;
        while (head < tail) {
            const n = pop();
            for (let nn of graph[n]) {
                if (dist[nn] >= 0) continue;
                push(nn);
                dist[nn] = dist[n] + 1;
            }
        }
        
        const max = Math.max(...dist);
        console.log(dist)
        return dist.filter(d => d === max).length;
    }
    
    return bfs();
}