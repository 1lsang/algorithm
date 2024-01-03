"use strict"

const [[n, m], arr1, arr2] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(n, m, arr1, arr2) {
    const answer = [];
    let i = 0;
    let j = 0;
    while (i < n || j < m) {
        if (i === n) answer.push(arr2[j++]);
        else if (j === m) answer.push(arr1[i++]);
        else if (i < n && arr1[i] <= arr2[j]) answer.push(arr1[i++]);        
        else if (j < m && arr2[j] < arr1[i]) answer.push(arr2[j++]);
    }

    return answer.join(' ');
}

console.log(solution(n, m, arr1, arr2));