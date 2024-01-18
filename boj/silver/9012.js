"use strict"

const [n, ...pss] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map((str, idx) => idx === 0 ? Number(str) : str);

function solution(n, pss) {
    const answer = [];
    for (let ps of pss) {
        const s = [];
        for (let p of ps) {
            if (p===')' && s.length && s.at(-1)==='(') s.pop();
            else s.push(p);
        }
        answer.push(s.length ? 'NO' : 'YES');
    }
    return answer.join('\n');
}

console.log(solution(n, pss));