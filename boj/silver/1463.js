"use strict"

const n = Number(require('fs').readFileSync('./dev/stdin').toString().trim());

function solution(n) {
    
    
    // 1. 테이블 정의하기
    // d[i] = i를 1로 만들기 위해 필요한 연산 사용 횟수의 최솟값
    const d = Array.from({ length: 1000001 }, () => 0);
    // 2. 점화식 찾기
    // d[k] = Math.min(d[k/3] + 1, d[k/2] + 1, d[k-1] + 1)

    // 3. 초기값 정의하기
    d[1] = 0;

    for (let k = 2; k <= n; k++) {
        const arr = [];
        if (k%3 === 0) arr.push(d[k/3]+1);
        if (k%2 === 0) arr.push(d[k/2]+1);
        arr.push(d[k-1] + 1);
        d[k] = Math.min(...arr);
    }

    return d[n];
}

console.log(solution(n));