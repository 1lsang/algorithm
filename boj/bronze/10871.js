"use strict";

const fs = require('fs');
const [[_, x], inputs] = fs.readFileSync('/dev/stdin').toString().split('\n').map(arr=>arr.split(' ').map(Number));

const answer = inputs.reduce((acc, cur) => {
    if (cur<x) return acc+`${cur} `;
    return acc;
}, "").trim();

console.log(answer);