"use strict"

const [[n, c], message] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(n, c, message) {
    const order = [];
    const cnt = new Map();
    message.forEach((m) => {
        if (cnt.get(m)) cnt.set(m, cnt.get(m)+1);
        else cnt.set(m, 1);
        if (!order.includes(m)) order.push(m);
    })
    return message.sort((a, b) => (cnt.get(a) === cnt.get(b)) ? order.findIndex(n => n===a) - order.findIndex(n => n===b) : cnt.get(b) - cnt.get(a)).join(' ');
}

console.log(solution(n, c, message));