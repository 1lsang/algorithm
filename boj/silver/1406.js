"use strict"

const [initialValue, m_str, ...inputs] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
const m = Number(m_str);

function solution(initialValue, m, inputs) {
    const lstack = initialValue.split('');
    const rstack = [];

    for (let input of inputs) {
        const [cmd, value] = input.split(' ');
        if (cmd === "L") {
            if (lstack.length != 0) rstack.push(lstack.pop());
        } else if (cmd === "D"){
            if (rstack.length != 0) lstack.push(rstack.pop());
        } else if (cmd === "B") {
            if (lstack.length != 0) lstack.pop();
        } else if (cmd === "P") {
            lstack.push(value);
        }
    }
    
    return lstack.join('')+rstack.reverse().join('');
}

console.log(solution(initialValue, m, inputs));