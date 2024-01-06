"use strict"

const [t, ...nums] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(Number);

function solution(t, nums) {
    const len = Math.max(...nums) + 1;
    // 1. 테이블 정의하기
    // d[k]
    
    // d[k] = d[k-1] + d[k-2] + d[k-3]
    // 2. 점화식 & 초기값 찾기
    // d[1] = 1
    // d[2] = 1+1, 2
    // d[3] = 1+1+1, 1+2, 2+1, 3
    // d[4] = 1+1+1+1, 1+2+1. 2+1+1, 3+1, 1+1+2, 2+2, 1+3

    const d = Array.from({ length: len }, () => 0);
    
    d[1] = 1;
    d[2] = 2;
    d[3] = 4;
    
    for (let k = 4; k < len; k++){
        d[k] = d[k-1] + d[k-2] + d[k-3];
    }

    return nums.map(num => d[num]).join('\n')
}

console.log(solution(t, nums));