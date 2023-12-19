// 대각선 판별 방법
// 수학에서 좌표평면에 그래프를 그리는 것을 생각하면 가능
// ↗️ x+y가 같은지 확인
// ↘️ x-y가 같은지 확인
"use strict"

const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

function solution(n) {
    let answer = 0;
    const isUsed = Array.from({length: 3}, () => Array.from({length: 2*n-1}, ()=>false));

    function backTracking(k) {
        if (k === n) return answer++;
        for (let i = 0; i < n; i++) {
            if(!isUsed[0][i] && !isUsed[1][k+i] && !isUsed[2][k-i+n-1]) {
                isUsed[0][i] = true;
                isUsed[1][k+i] = true;
                isUsed[2][k-i+n-1] = true;
                backTracking(k+1);
                isUsed[0][i] = false;
                isUsed[1][k+i] = false;
                isUsed[2][k-i+n-1] = false;
            }

        }
    }

    backTracking(0);
    
    return answer;
}

console.log(solution(n));