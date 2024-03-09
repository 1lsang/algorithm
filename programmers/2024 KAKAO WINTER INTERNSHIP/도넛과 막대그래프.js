"use strict"

function solution(edges) {
    const answer = [0, 0, 0, 0];
    const graph = [];
    const tmp = [];
    
    
    edges.forEach(([from, to]) => {
        if (graph[from]) graph[from].push(to);
        else graph[from] = [to];
        
        if (tmp[to]) tmp[to].push(from);
        else tmp[to] = [from];
    });
    
//     const v = (() => {
//         const max = Math.max(...graph.filter(arr => arr).map(arr => (arr?.length) ? arr.length : 0));
//         const vs = Array(graph.length).fill(false);

        
        
//         return vs.findIndex(a => a);
//     })();
    
    
    // const v = graph.findIndex(arr => arr?.length > 2);
    const v = (() => {
        const a = graph.findIndex(arr => arr?.length > 2);
        if (a > -1) return a;
        for (let i = 1; i < graph.length; i++) {
            if (graph[i] && !(tmp[i]?.length)) return i;
        }
    })();
    
    answer[0] = v;
    
    const findTypeOfTree = (start) => {
        const s = [start];
        while (s.length > 0) {
            const n = s.pop();
            if (graph[n]) {
                if (graph[n].length > 1) return answer[3]++;
                const nn = graph[n][0];
                if (graph[nn]) {
                    // 3. 8자 그래프
                    // 경로가 2개 이상인 노드가 있을 경우
                    if (graph[nn].length > 1) return answer[3]++;
                    // 2. 도넛 그래프
                    // 시작점으로 돌아올 경우
                    else if (nn === start) return answer[1]++;
                }
                s.push(nn);
            }
        }
        // 1. 막대 그래프
        // 다음 노드가 없어서 끝나면
        return answer[2]++;
    }
    
    graph[v].forEach(findTypeOfTree);
    
    return answer;
}