"use strict"

const [[n, m], ...inputs] = require('fs').readFileSync('/dev/stdin').toString().trim()
  .split('\n').map(arr=>arr.split(' ').map(Number));

const limits = inputs.slice(0, n);
const tests = inputs.slice(n);

function solution(n, m, limits, tests) {
  const answer = [];
  // 누적 거리로 변환
  for (let i = 0; i < n; i++) {
    limits[i][0] += (limits[i-1] ? limits[i-1][0] : 0);
  }
  for (let i = 0; i < m; i++) {
    tests[i][0] += (tests[i-1] ? tests[i-1][0] : 0);
  }
  
  let i = 0; 
  let j = 0;
  while (i <= n && j <= m) {
    let limit = limits[(i>=n) ? n-1 : i];
    let test = tests[(j>=m) ? m-1 : j];
    // test의 구간의 속도가 limit의 구간의 속도보다 큰 경우 
    if (test[1]>limit[1]) {
      answer.push(test[1]-limit[1]);
    }
    if (test[0] > limit[0]) i++;
    else if (test[0] < limit[0]) j++;
    else {
      i++; 
      j++;
    }
  }

  return Math.max(0, ...answer);
}

console.log(solution(n, m, limits, tests));