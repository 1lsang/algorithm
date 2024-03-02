"use strict"

const [[n, m], ...nums] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map((str, idx) => str.split(idx === 0 ? ' ' : '').map(Number));

function solution(n, m, nums) {
    const max = Math.min(n, m);

    for(let i = max; i > 1; i--) {
        for (let x = 0; x < n - i + 1; x++) {
            for (let y = 0; y < m - i + 1; y++) {
                if (nums[x][y] === nums[x+i-1][y] && nums[x][y] === nums[x][y+i-1] && nums[x][y] === nums[x+i-1][y+i-1]) return i * i;
                
            }
        }
    }

    return 1;
}

console.log(solution(n, m, nums));