"use strict"

const [n_str, input_str, v_str] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
const n = Number(n_str);
const num_list = input_str.split(' ').map(Number);
const v = Number(v_str);

function solution(n, num_list, v) {
    return num_list.filter(num=>num===v).length;
}

console.log(solution(n, num_list, v))