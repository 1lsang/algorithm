const [_, grades, ...intervals] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(arr=>arr.split(' ').map(Number));

function solution(grades, intervals) {
  const answer = [];
  for (let [start, end] of intervals) {
    answer.push((grades.slice(start-1, end).reduce((a, b)=>a+b, 0)/(end-start+1)).toFixed(2));
  }
  return answer.join('\n');
}

console.log(solution(grades, intervals));