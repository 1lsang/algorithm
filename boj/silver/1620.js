"use strict"

const [[n, m], ...inputs] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map((str, idx) => idx === 0 ? str.split(' ').map(Number) : str);
const dogam = inputs.slice(0, n);
const problems = inputs.slice(n, n + m);

function solution(n, m, dogam, problems) {
    const obj = {};
    dogam.forEach((p, i) => obj[p] = i + 1);
    return problems.map(problem => isNaN(Number(problem)) ? obj[problem] : dogam[Number(problem)-1]).join('\n');
}

console.log(solution(n, m, dogam, problems));