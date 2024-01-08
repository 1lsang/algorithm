"use stirct"

const inputs = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number)).slice(0, -1);

function solution(inputs){
    const answer = [];

    for(let input of inputs) {
        input.sort((a, b) => a - b);
        if((input[0] ** 2) + (input[1] ** 2) === (input[2] ** 2)) {
          answer.push("right")
        } else {
          answer.push("wrong")
        }
      }

      return answer.join('\n');
}

console.log(solution(inputs));