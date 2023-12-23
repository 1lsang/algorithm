"use static"

const [[n, m], arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(n, m, arr) {
    const answers = [];
    const sorted = arr.sort((a, b) => a-b);
    const answer = [];
    
    function bt(k) {
        if (k === m) return answers.push(answer.join(' '));
        for (let i = 0; i < n; i++) {
            answer.push(sorted[i]);
            bt(k+1);
            answer.pop();
        }
    }

    bt(0);

    return answers.join('\n');
}

console.log(solution(n, m, arr));