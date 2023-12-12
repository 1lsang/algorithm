"use strict"

const [_, ...inputs] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(inputs) {
    let answer = 0;
    for (let input of inputs) {
        const s = [];
        for (let str of input) {
            if (s.at(-1) === 'A' && str === 'A') s.pop();
            else if (s.at(-1) === 'B' && str === 'B') s.pop();
            else if (str === 'A') s.push('A');
            else if (str === 'B') s.push('B');
        }
        if (s.length===0) answer++;
    }
    return answer;
}

console.log(solution(inputs));