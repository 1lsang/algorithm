"use strict"

const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const result = String(inputs[0]*inputs[1]*inputs[2]);
const arr = Array.from({length:10}, ()=>0);

for(let n of result) {
    arr[Number(n)]++;
}

arr.forEach(n=>console.log(n));