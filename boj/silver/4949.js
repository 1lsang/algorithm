"use strict"

const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(0, -1);

function solution(inputs) {
    const answer = [];
    
    for (let input of inputs) {
        const s = [];
        let isValid = true;
        for(let str of input) {
            if (str === '(' || str === '[') s.push(str);
            else if (str === ')') {
                if (s.at(-1)!=='(') {
                    isValid = false;
                    break;
                }
                s.pop();
            }
            else if (str === ']') {
                if (s.at(-1)!=='[') {
                    isValid = false;
                    break;
                }
                s.pop();
            }
        }
        answer.push((s.length ===0 && isValid) ? 'yes' : 'no');
    }
    return answer.join('\n');
}

console.log(solution(inputs));