"use strict"

const board = require('fs').readFileSync('./dev/stdin').toString().trim();

function solution(board) {
    let answer = board
    for (let i = 0; i < board.length / 4; i++) {
        answer = answer.replace('XXXX', 'AAAA');
    }
    for (let i = 0; i < board.length / 2; i++) {
        answer = answer.replace('XX', 'BB');
    }
    return answer.match('X') ? -1 : answer;
}

console.log(solution(board));