"use strict"

const [[n], nums] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(n, nums) {
    let answer = 0;
    
    function isPrime(n) {
        if (n === 1) return false;
        for (let i = 2; i*i <= n; i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    for (let num of nums) {
        if (isPrime(num)) answer++;
    }
    
    return answer; 
}

console.log(solution(n, nums))