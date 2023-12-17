"use strict"

const [_, ...inputs] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(str=>str.split(' '));

const numbers = [
  [1, 1, 1, 1, 1, 1, 0],    // 0
  [0, 1, 1, 0, 0, 0, 0],    // 1
  [1, 1, 0, 1, 1, 0, 1],    // 2
  [1, 1, 1, 1, 0, 0, 1],    // 3
  [0, 1, 1, 0, 0, 1, 1],    // 4
  [1, 0, 1, 1, 0, 1, 1],    // 5
  [1, 0, 1, 1, 1, 1, 1],    // 6
  [1, 1, 1, 0, 0, 1, 0],    // 7
  [1, 1, 1, 1, 1, 1, 1],    // 8
  [1, 1, 1, 1, 0, 1, 1],    // 9
  [0, 0, 0, 0, 0, 0, 0]     // offㄴ
];

function change(a, b) {
  let cnt = 0;
  let prev = (a !== '_') ? Number(a) : 10;
  let next = (b !== '_') ? Number(b) : 10;
  for (let i = 0; i < 7; i++) {
    if (numbers[prev][i]!==numbers[next][i]) cnt++;
  }
  return cnt;
}

function solution(inputs) {
  const answer = [];
  const padInputs = inputs.map(arr => arr.map(str => str.padStart(5, '_')));
  for (let [prev, next] of padInputs) {
    let cnt = 0;
    for (let i = 0; i < 5; i++) {
      if (prev[i]!==next[i]) cnt += change(prev[i], next[i]);
    }
    answer.push(cnt);
  }
  return answer.join('\n');
}

console.log(solution(inputs));
