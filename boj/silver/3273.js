"use strict"

let [n, num_list, x] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
n = Number(n);
num_list = num_list.split(" ").map(Number);
x = Number(x);

function solution(n, num_list, x) {
    let cnt = 0;
    const arr = Array.from({length: x+1}, ()=>{});
    
    for(let num of num_list) {
        if (x-num>0) {
            if (arr[x-num]==1) cnt++;
            arr[num]=1;
        }
    }
    return cnt;
}

console.log(solution(n, num_list, x));