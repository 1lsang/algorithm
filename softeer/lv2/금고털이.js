const [[w, n], ...jewels] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(arr=>arr.split(' ').map(Number));

function solution(w, n, jewels) {
  let answer = 0;
  let bag = 0;
  
  for (let [m, p] of jewels.sort((a, b) => b[1]-a[1])) {
    if (bag>=w) break;
    const tmp = Math.min(w-bag, m);
    bag += tmp;
    answer += tmp * p;
  }
  
  return answer;
}

console.log(solution(w, n, jewels));