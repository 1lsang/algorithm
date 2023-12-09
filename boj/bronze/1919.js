"use strict"

const [ word1, word2 ] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function countAlphabets(word) {
    const arr = Array.from({length: 26}, ()=>0)
    for(let str of word) {
        arr[str.charCodeAt()-'a'.charCodeAt()]++;
    }
    return arr
}

function solution(word1, word2) {
    const arr1 = countAlphabets(word1)
    const arr2 = countAlphabets(word2)

    let res = 0;
    for (let i=0; i<26; i++) {
        res += Math.abs(arr1[i]-arr2[i]);
    }

    return res;
}

console.log(solution(word1, word2));