"use strict"
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(input) {
    let cnt = 0;
    const arr = Array.from({length:10}, ()=>0);
    for (let n of input) {
        if(n==="6" || n==="9") cnt++;
        else arr[Number(n)]++;
    }
    // 최초 시도시, parseInt를 사용했더니 반올림이 되어, cnt가 홀수인 경우에 실패
    return Math.max(Math.ceil(cnt/2), ...arr);
}

console.log(solution(input));