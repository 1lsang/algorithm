"use strict"

const [[n], ...costs] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(n, costs) {
    // 1. 배열: d[i][j] i번째 집까지 칠했을 때의 최솟값, 단 j번째 색깔은 빨강, 초록, 파랑
    const arr = Array.from({ length: n }, () => Array.from({ length: 3 }, () => 0));

    // 3. 초깃값
    [arr[0][0], arr[0][1], arr[0][2]] = costs[0]
    // console.log(arr[0])
    // 2. 점화식
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < 3; j++) {
            // 현재 비용 = 이전 비용 
            // console.log(Math.min(...costs[i].filter((_, idx) => idx !== j)))
            arr[i][j] = Math.min(...arr[i-1].filter((_, idx) => idx !== j)) + costs[i][j];
        }
        
    }

    return Math.min(...arr[n-1])
}

console.log(solution(n, costs));