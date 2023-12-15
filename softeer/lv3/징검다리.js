const [ [n], stones ] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(arr=>arr.split(' ').map(Number));

function solution(n, stones) {
  // 최소값으로 배열 세팅
  const answer = Array.from(stones, ()=>1);
  
  for (let i = 0; i < n; i++) {
    let find = 0
    // 이전의 돌 중에서 자신보다 작은 돌을 찾고, 그 돌까지 밟을 수 있는 최대 개수를 찾음
    for (let j = 0; j < i; j++) {
      if (stones[j] < stones[i]) find = Math.max(find, answer[j]);
    }
    // 찾은 최대 개수에서 1을 더한 것이 현재 돌까지 밟을 수 있는 최대 개수
    answer[i] = find + 1;
  }
  
  return Math.max(...answer);
}

console.log(solution(n, stones));