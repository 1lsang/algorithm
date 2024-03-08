"use strict"

function solution(tickets) {
    const answer = [];
    const used = Array(tickets.length).fill(false);
    tickets.sort();
    const route = [];
    
    function bt(n, node) {
        route.push(node);
        
        if (route.length === tickets.length + 1) {
            answer.push([...route]);
            return;
        }
        
        for (let i = 0; i < tickets.length; i++) {
            const [from, to] = tickets[i];
            if (from !== node || used[i]) continue;
            used[i] = true;
            bt(n+1, to);
            route.pop();
            used[i] = false;
        }
    }
    
    bt(0, 'ICN');
    
    return answer[0];
}