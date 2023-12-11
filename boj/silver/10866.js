"use strict"

const [_, ...inputs] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(inputs) {
    const answer = [];
    const MX = 10005;
    const data = Array.from({length: 2*MX+1}, ()=>-1);
    let head = MX;
    let tail = MX;

    const isEmpty = () => head === tail;

    for (let input of inputs) {
        const [cmd, x] = input.split(' ');
        if (cmd === 'push_front') data[--head] = x;
        else if (cmd === 'push_back') data[tail++] = x;
        else if (cmd === 'pop_front') answer.push(!isEmpty() ? data[head++] : -1);
        else if (cmd === 'pop_back') answer.push(!isEmpty() ? data[--tail] : -1)
        else if (cmd === 'size') answer.push(tail-head);
        else if (cmd === 'empty') answer.push(isEmpty() ? 1 : 0);
        else if (cmd === 'front') answer.push(!isEmpty() ? data[head] : -1)
        else if (cmd === 'back') answer.push(!isEmpty() ? data[tail-1] : -1)
    }

    return answer.join('\n');
}

console.log(solution(inputs));