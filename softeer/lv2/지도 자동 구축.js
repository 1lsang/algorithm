"use strict"

const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

function func(n) {
  if (n === 0) return 2;
  const half = func(n-1);
  return 2 * half - 1;
}

function solution(n) {
  return func(n)**2;
}

console.log(solution(n));