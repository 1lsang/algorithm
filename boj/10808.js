"use strict";

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("");

const arr = Array.from({length: 26}, ()=>0);
input.map(alphabet=>arr[alphabet.charCodeAt()-97]++)

console.log(arr.join(' '));
