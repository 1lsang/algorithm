"use strict"

const [n, ...scores] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map((s, i) => (i === 0) ? s : Number(s)));

function solution(n, scores) {
    return scores.sort((a, b) => {
        if (!(a[1] === b[1])) return b[1] - a[1];
        else if (!(a[2] === b[2])) return a[2] - b[2];
        else if (!(a[3] === b[3])) return b[3] - a[3];
        else {
            for (let i = 0; i < a[0].length && i < b[0].length; i++) {
                if (a[0][i] === b[0][i]) continue;
                return a[0][i].charCodeAt() - b[0][i].charCodeAt();
            }
            return a[0].length - b[0].length;
        }
    }).map(arr => arr[0]).join('\n');
}

console.log(solution(n, scores));