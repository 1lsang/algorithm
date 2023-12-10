"use strict"

const [ n_str, input_str ] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(n_str);
const input = input_str.split(' ').map(Number);

function solution(n, input) {
    const answer = [];
    
    while (answer.length<n) {
        const stack = [];

        let current = input.pop();

        while (input.at(-1) && current>input.at(-1)) {
            stack.push(input.pop());
        }

        answer.push(input.at(-1) ? input.length : 0);
        input.push(...stack.reverse());
    }
    
    return answer.reverse().join(' ');
}

console.log(solution(n, input));