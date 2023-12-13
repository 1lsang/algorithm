"use strict"

const input = require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(input) {
    const numBracket = { '(': 2, ')':2, '[': 3, ']': 3 };
    const matchBracket = (b) => (b===')') ? '(' : '[';
    const s = [];
    let answer = 0; // 누적 합
    let num = 1;    // 곱해질 수
    let prev = '';

    // 계산
    for (let str of input) {
        if (str === '(' || str === '[') {
            s.push(str);
            num *= numBracket[str];     // 여는 괄호가 들어올 경우 곱해질 수 증가
        }
        else if (str === ')' || str === ']') {
            // 올바르지 않은 괄호열
            if (s.at(-1) !== matchBracket(str)) return 0;     
            // 바로 이전 단계가 왼쪽 괄호일 때 누적  
            if (prev === matchBracket(str)) answer += num;    
            s.pop();
            num /= numBracket[str];
        }
        prev = str;
    }

    return s.length === 0 ? answer : 0;
}

console.log(solution(input));