"use strict"

const [[n], ...paper] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(n, paper) {
    const answer = [0, 0];
    
    function check(x, y, n) {
        for (let i=x; i<x+n; i++) {
            for (let j=y; j<y+n; j++) {
                if (paper[i][j]!==paper[x][y]) return false;
            }
        }
        return true;
    }

    function func(x, y, n) {
        if (n===1 || check(x, y, n)) {
            answer[paper[x][y]]++;
            return;
        }
        for (let i=0; i<2; i++) {
            for (let j=0; j<2; j++) {
                func(x+i*n/2, y+j*n/2, n/2);
            }
        }
    }

    func(0, 0, n);

    return answer.join('\n');
}

console.log(solution(n, paper));