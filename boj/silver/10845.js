"use strict"

const [_, ...inputs] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(inputs) {
    const answer = [];
    const queue = Array.from({length: 5}, ()=>-1);
    let head = 0;
    let tail = 0;

    const isEmpty = () => head === tail;

    for (let input of inputs) {
        const [cmd, val] = input.split(' ');
            if (cmd === "push") queue[tail++] = Number(val);
            else if (cmd === "pop") answer.push(isEmpty() ? -1 : queue[head++]);
            else if (cmd === "size") answer.push(tail-head);
            else if (cmd === "empty") answer.push(isEmpty() ? 1 : 0);
            else if (cmd === "front") answer.push(isEmpty() ? -1 : queue[head]);
            else if (cmd === "back") answer.push(isEmpty() ? -1 : queue[tail-1]);
    }

    return answer.join('\n');
}

console.log(solution(inputs));
