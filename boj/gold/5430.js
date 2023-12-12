"use strict"

const [T_str, ...inputs] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');

const T = Number(T_str);

function solution(T, inputs) {
    const answer = [];
    for (let i = 0; i < T; i++) {
        const cmd = inputs[3 * i];
        const n = Number(inputs[3 * i + 1]);
        const arr = inputs[3 * i + 2].slice(1, -1).split(',').filter(a=>a!=='').map(Number);

        let cnt1 = 0;
        let cnt2 = 0;
        let error = false;
        let reverse = false;
        
        for (let f of cmd) {
            if (f === 'R') reverse = !reverse
            else if (f === 'D') {
                if (arr.length <= cnt1+cnt2) {
                    error = true;
                    break;
                }
                reverse ? cnt2++ : cnt1++
            }
        }
        
        answer.push(error ? 'error' : `[${reverse ? arr.slice(cnt1, n-cnt2).reverse() : arr.slice(cnt1, n-cnt2)}]`);
    }

    return answer.join('\n');
}

console.log(solution(T, inputs))