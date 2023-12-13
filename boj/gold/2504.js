"use strict"

const input = require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(input) {
    const s = [];

    // 올바르지 못한 괄호열 체크
    for (let str of input) {
        if (str === '(' || str === '[') s.push(str);
        else if (str === ')' && s.at(-1) === '(') s.pop();
        else if (str === ']' && s.at(-1) === '[') s.pop();
        else return 0;
    }
    if (s.length!==0) return 0;

    // 계산
    for (let str of input) {
        if (str === '(' || str === '[') {
            s.push(str);
        }
        else if (str === ')') {
            if (s.at(-1)==='(') {
                s.pop();
                s.push(2);
            } else {
                let tmp = 0;
                while (s.at(-1)!=='(') {
                    tmp += s.pop();
                }
                s.pop();
                s.push(tmp*2);
            }
        }
        else if (str === ']') {
            if (s.at(-1)==='[') {
                s.pop();
                s.push(3);
            } else {
                let tmp = 0;
                while (s.at(-1)!=='[') {
                    tmp += s.pop();
                }
                s.pop();
                s.push(tmp*3);
            }
        }
    }

    return s.reduce((a,b)=>a+b, 0);
}

console.log(solution(input));