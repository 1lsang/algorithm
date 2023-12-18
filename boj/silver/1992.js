"use strict"

const [n, ...video] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map((str, idx) => (idx===0) ? Number(str) : str.split('').map(Number));

function solution(n, video) {
    function check(x, y, n) {
        for (let i=x; i<x+n; i++) {
            for (let j=y; j<y+n; j++) {
                if (video[i][j]!==video[x][y]) return false;
            }
        }
        return true;
    }

    function solve(x, y, n) {
        let answer = ''
        if (n === 1 || check(x, y, n)) {
            answer += String(video[x][y])
        }
        else {
            answer += '(';
            for (let i=0; i<2; i++) {
                for (let j=0; j<2; j++) {
                    answer += solve(x+i*n/2, y+j*n/2, n/2);
                }
            }
            answer += ')';
        }
        return answer;
    }

    return solve(0, 0, n);
}

console.log(solution(n, video));