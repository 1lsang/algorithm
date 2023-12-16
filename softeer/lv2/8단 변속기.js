"use strict"

const inputs = require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(inputs) {
  if (inputs === '1 2 3 4 5 6 7 8') return 'ascending';
  if (inputs === '8 7 6 5 4 3 2 1') return 'descending';
  return 'mixed'
}

console.log(solution(inputs));