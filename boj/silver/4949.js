"use strict"

const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(0, -1);

function solution(inputs) {
    const answer = [];
    const isBracket = (x) => x === '(' || x === ')' || x === '[' || x === ']';
    
    for (let [i, input] of inputs.entries()) {
        const s = [];
        for(let bracket of input.split('').filter(isBracket)) {
            if (bracket === '(' || bracket === '[') s.push(bracket);
            else if (bracket === ')') {
                if (s.at(-1)==='(') s.pop();
                else {
                    answer.push('no');
                    break;
                }
            }
            else if (bracket === ']') {
                if (s.at(-1)==='[') s.pop();
                else {
                    answer.push('no');
                    break;
                }
            }
        }
        if (answer.length < i+1) answer.push((s.length ===0) ? 'yes' : 'no');
    }
    return answer.join('\n');
}

console.log(solution(inputs));