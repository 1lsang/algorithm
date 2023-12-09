"use strict"

const [N, ...inputs] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(inputs) {
    const stack = [];
    const result = [];
    for(let input of inputs) {
        const [cmd, value] = input.split(' ');
        switch(cmd) {
            case 'push':
                stack.push(value);
                break;
            case 'pop':
                result.push(stack.pop(value) ?? -1);
                break;
            case 'size':
                result.push(stack.length);
                break;
            case 'empty':
                result.push(stack.length === 0 ? 1 : 0);
                break;
            case 'top':
                result.push(stack.at(-1) ?? -1);
                break;
        }
    }
    return result.join('\n');
}

console.log(solution(inputs));