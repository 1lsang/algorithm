"use strict"

const [[a1, b1], [a2, b2]] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(a1, b1, a2, b2) {
    function gcd(a, b) {
        if (a === 0) return b;
        return gcd(b%a, a)
    }

    const a = a1 * b2 + a2 * b1;
    const b = b1 * b2;

    const c = gcd(a, b);

    return [a/c, b/c].join(' ')
}

console.log(solution(a1, b1, a2, b2));
