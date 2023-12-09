"use strict"

const [n, ...inputs] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function solution(inputs) {
    const answer = [];
    const s = [];
    let cnt = 1;

    function push() {
        s.push(cnt);
        cnt++;
        answer.push('+');
    }

    function pop() {
        answer.push('-');
        return s.pop();
    }

    for (let input of inputs) {
        while (s.length===0 || s.at(-1)<input) push();
        if (pop()!==input) return 'NO';
    }

    return answer.join('\n');
}

console.log(solution(inputs));