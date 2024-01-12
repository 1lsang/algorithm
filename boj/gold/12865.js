"use strict"

const [[n, k], ...wv] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(n, k, wv) {
    // d[i][j] = j가 최대 무게일 때, i번째까지 물건까지 담으면서 가질 수 있는 최대 가치
    const d = Array.from({ length: n }, () => Array.from({ length: k+1 }, () => 0));
    
    for (let w = 0; w <= k; w++) {
        if (wv[0][0] <= w) d[0][w] = wv[0][1];
    }

    for (let i = 1; i < n; i++) {
        for (let w = 0; w <= k; w++) {
            if (wv[i][0] > k) {
                d[i][w] = d[i-1][w];
                continue;
            }
            if (d[i-1][w] < d[i-1][w-wv[i][0]] + wv[i][1]) {
                d[i][w] = d[i-1][w-wv[i][0]] + wv[i][1];
            } 
            else d[i][w] = d[i-1][w];
        }
    }

    return d[n-1][k];
}

console.log(solution(n, k, wv));