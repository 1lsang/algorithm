"use strict"

const [n, ...words] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map((str, idx) => idx === 0 ? Number(str) : str);

function checkGW(word) {
    const check = Array(26).fill(false);
    let prev = word[0];
    check[prev.charCodeAt()-'a'.charCodeAt()] = true;

    for (let s of word) {
        if (s === prev) continue;
        if (check[s.charCodeAt() - 'a'.charCodeAt()]) return false;
        check[s.charCodeAt() - 'a'.charCodeAt()] = true;
        prev = s;
    }

    return true;
}

function solution(n, words) {
    let answer = 0;
    for (let i = 0; i < n ; i++) {
        if (checkGW(words[i])) answer++;
    }
    return answer;
}

console.log(solution(n, words));