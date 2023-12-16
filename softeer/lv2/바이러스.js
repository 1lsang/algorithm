"use strict"

const [k, p, n] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt);

function pow(p, n) {
  const t = 1000000007n;
  if (n === 1n) return p % t;
  const half = pow(p, n/2n);
  return (n % 2n === 0n) ? half * half % t : half * half * p % t
}

function solution(k, p, n) {
  return Number(k * pow(p, n) % 1000000007n);
}

console.log(solution(k, p, n));