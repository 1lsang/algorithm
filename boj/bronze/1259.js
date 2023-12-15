"use strict"

const inputs = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').slice(0, -1);

function solution(inputs) {
    const answer = [];
    for (let input of inputs) {
        let isPalindrome = true;
        for (let i = 0; i < input.length/2; i++) {
            if (input[i] !== input[input.length-1-i]) {
                isPalindrome = false;
                break;
            }
        }
        answer.push(isPalindrome ? 'yes' : 'no');
    }
    
    return answer.join('\n');
}

console.log(solution(inputs));