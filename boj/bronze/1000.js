"use strict";
const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split(' '); 

const [a, b] = input.map(n=>Number(n));
console.log(a + b);