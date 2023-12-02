const [_, ...arr] = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 

arr.forEach((input, idx)=>{
  const [a, b] = input.split(" ").map(i => Number(i));
  console.log(`Case #${idx+1}: ${a+b}`)
})