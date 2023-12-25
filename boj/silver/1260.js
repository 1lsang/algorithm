"use strict"

const [[n, m, v], ...connects] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(n, m, v, connects) {
    const answer = [];

    function dfs() {
        const graph = Array.from({ length: n+1 }, ()=>[]);
        for (let i = 0; i < m; i++) {
            const [a, b] = connects[i];
            graph[a].push(b);
            graph[b].push(a);
        }
        graph.forEach(arr => arr.sort((a, b) => a - b));

        const answer = [];
        const vis = Array(n+1).fill(false);
        const s = [];
        s.push(v);
        while(s.length > 0) {
            const x = s.pop();
            if (vis[x]) continue;
            vis[x] = true;
            answer.push(x);
            s.push(...graph[x].reverse());
        }

        return answer.join(' ');
    }

    function bfs() {
        const graph = Array.from({ length: n+1 }, ()=>[]);
        for (let i = 0; i < m; i++) {
            const [a, b] = connects[i];
            graph[a].push(b);
            graph[b].push(a);
        }
        graph.forEach(arr => arr.sort((a, b) => a - b));

        const answer = [];
        const vis = Array(n+1).fill(false);
        const q = [];
        let head = 0;
        let tail = 0;
        const qPush = (x) => {
            q.push(x);
            tail++;
        }
        const qPop = () => q[head++];

        qPush(v);
        answer.push(v);
        vis[v] = true;
        while(head < tail) {
            const x = qPop();
            for (let i = 0; i < graph[x].length; i++) {
                const nx = graph[x][i];
                if (vis[nx]) continue;
                vis[nx] = true;
                answer.push(nx);
                qPush(nx);
            }
        }

        return answer.join(' ');
    }

    answer.push(dfs());
    answer.push(bfs());

    return answer.join('\n');
}

console.log(solution(n, m, v, connects));