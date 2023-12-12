"use strict"

const input = require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(input) {
    let answer = 0;
    const s = [];
    let prev = '';
    for (let str of input) {
        if (str === ')') {
            s.pop();
            if (prev === '(') answer = answer -1 + s.length;
        }
        else if (str === '(') s.push(answer++);
        prev = str;
    }
    return answer;
}

console.log(solution(input));