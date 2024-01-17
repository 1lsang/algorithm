"use strict"

const [n, ...arr] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map((str, idx) => (idx === 0) ? Number(str) : str.split(' '));

function solution(n, arr) {
    const answer = [];
    for(let [a, b] of arr) {
        const A = a.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('');
        const B = b.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('');
        if (A === B) answer.push('Possible');
        else answer.push('Impossible');
    }
    return answer.join('\n');
}

console.log(solution(n, arr));