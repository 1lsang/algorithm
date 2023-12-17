"use strict"

const [[n], ...paper] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(n, paper) {
    const answer = [0, 0, 0];

    function check(x, y, n) {
        for (let i=x; i<x+n; i++) {
            for (let j=y; j<y+n; j++) {
                if (paper[x][y] !== paper[i][j]) return false;
            }
        }
        return true;
    }
    
    function solve(x, y, n) {
        if (check(x, y, n)) {
            answer[paper[x][y]+1]+=1;
            return;
        }
        for (let i=0; i<3; i++) {
            for (let j=0; j<3; j++) {
                solve(x+i*n/3, y+j*n/3, n/3);
            }
        }
        
    }

    solve(0, 0, n);

    return answer.join('\n');
}

console.log(solution(n, paper));