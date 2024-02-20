"use strict"

const [[n, m], ...packages] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(n, m, packages) {
    const set = packages.map(arr => arr[0]).sort((a, b) => a - b)[0];
    const single = packages.map(arr => arr[1]).sort((a, b) => a - b)[0];

    return (Math.floor(n / 6) * Math.min(set, single * 6)) + Math.min((n % 6) * single, set);
}

console.log(solution(n, m, packages));