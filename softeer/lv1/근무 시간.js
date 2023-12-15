"use strict"

const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(arr => arr.split(' ').map(arr=>arr.split(':').map(Number)));

function solution(inputs) {
  return inputs.reduce((min, [start, end])=>min + (end[0]-start[0])*60 + end[1]-start[1], 0);
}

console.log(solution(inputs));