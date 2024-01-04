"use strict"

const [n, ...serials] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map((str, idx) => idx === 0 ? Number(str) : str);

function solution(n, serials) {
    return serials.sort((a, b) => {
        if (a.length !== b.length) return a.length - b.length
        const sumA = a.split('').reduce((acc, cur) => isNaN(Number(cur)) ? acc : acc + Number(cur), 0);
        const sumB = b.split('').reduce((acc, cur) => isNaN(Number(cur)) ? acc : acc + Number(cur), 0);
        if (sumA !== sumB) return sumA - sumB;
        return a.localeCompare(b);
    }).join('\n');
}

console.log(solution(n, serials));