"use strict"

const [n, ...words] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map((str, idx) => idx === 0 ? Number(str) : str);

function solution(n, words) {
    return Array.from(new Set(words)).sort((a, b) => {
        if (a.length !== b.length) return a.length - b.length;
        for (let i = 0; i < Math.min(a.length, b.length); i++) {
            if (a[i]!==b[i]) return a[i].charCodeAt() - b[i].charCodeAt();
        }
    }).join('\n')
}

console.log(solution(n, words));