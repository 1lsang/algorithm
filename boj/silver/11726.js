"use strict"

const n = Number(require('fs').readFileSync('./dev/stdin').toString().trim());

function solution(n) {
    const mod = 10007;

    // 1. 배열: d[k] = 2*k 크기의 직사각형을 채우는 방법
    const d = Array.from({ length: n+1 }, () => 0);
    

    // 2. 점화식
    // d[k] = d[k-1] + d[k-2]

    // 3. 초기값
    d[1] = 1;
    d[2] = 2;

    for (let k = 3; k <= n; k++) {
        d[k] = d[k-1] % mod + d[k-2] % mod;
    }

    return d[n] % mod;
}

console.log(solution(n));