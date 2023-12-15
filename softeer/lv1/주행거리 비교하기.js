"use strict"

const [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function solution(A, B) {
  if (A === B) return 'same';
  return (A > B) ? 'A' : 'B';
}

console.log(solution(A, B));