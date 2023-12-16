"use strict"

const [_, recipe ,input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(recipe, input) {
  return input.indexOf(recipe)>=0 ? 'secret' : 'normal';
}

console.log(solution(recipe, input));