"use strict"

const [[n, m], inputs] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((arr)=>arr.split(' ').map(Number));

function solution(n, m, inputs) {
    let answer = 0;
    const data = Array.from({length: n}, (_, i)=>i+1);
    const front = () => data[0];
    const pop_front = () => data.shift();
    const rotate_left = () => data.push(data.shift());
    const rotate_right = () => data.unshift(data.pop());

    for (let input of inputs) {
        const i = data.indexOf(input);
        while (front()!==input) {
            if (i<data.length/2) rotate_left();
            else rotate_right();
            answer++;
        }
        pop_front();
    }
    return answer;
}

console.log(solution(n, m, inputs));
