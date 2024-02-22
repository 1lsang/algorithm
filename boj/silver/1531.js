"use strict"

const [[n, m], ...pos] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(n, m, pos) {
    const picture = Array.from({ length: 101 }, () => Array(101).fill(0));
    for (let i = 0; i < n; i++) {
        const [x1, y1, x2, y2] = pos[i];
        for (let x = x1; x <= x2; x++) {
            for (let y = y1; y <= y2; y++) {
                picture[x][y]++;
            }
        }
    }
    
    return picture.reduce((acc, cur) => acc + cur.filter(p => p > m).length, 0);
}

console.log(solution(n, m, pos))