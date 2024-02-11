"use strict"

const [[n, w, l], a] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(n, w, l, a) {
  let time = 0;
  const bridge = Array(w).fill(0);
  let i = 0;

  while (i < n) {
    for (let j = 0; j < w-1; j++) {
      bridge[j] = bridge[j+1];
    }
    bridge[w-1] = 0;
    if (bridge.reduce((a, b) => a + b, 0) + a[i] <= l) {
      bridge[w-1] = a[i++];
    }
    time++;
  }
  return time + w;
}

console.log(solution(n, w, l, a));
