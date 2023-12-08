const [N, K] = require('fs').readFileSync('./dev/stdin').toString().trim().split(' ').map(Number);

function solution(N, K) {
    const arr = Array.from({length: N}, (_, i)=> i+1);
    const prev = Array.from({length: N}, (_, i)=> i-1);
    const next = Array.from({length: N}, (_, i)=> i+1);
    prev[0] = N-1;
    next[N-1] = 0;

    function erase(addr) {
        next[prev[addr]] = next[addr];
        prev[next[addr]] = prev[addr];
    }

    let cursor = K-1;
    const answer = [];
    
    while (answer.length<N) {
        answer.push(arr[cursor]);
        erase(cursor);
        for (let i = 0; i<K; i++) {
            cursor = next[cursor];
        }
    }

    return `<${answer.join(', ')}>`;
}

console.log(solution(N, K));