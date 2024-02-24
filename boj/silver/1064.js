"use strict"

const [x1, y1, x2, y2, x3, y3] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

function solution(x1, y1, x2, y2, x3, y3) {
    if (x1 === x2 && x1 === x3) return -1;
    if (y1 === y2 && y1 === y3) return -1;
    if ((x1 - x2) / (y1 - y2) === (x1 - x3) / (y1 - y3)) return -1;
    
    const lines = [Math.sqrt((x1 - x2)**2 + (y1 - y2)**2), Math.sqrt((x2 - x3)**2 + (y2 - y3)**2), Math.sqrt((x1 - x3)**2 + (y1 - y3)**2)];

    // 가장 작은 둘레 길이 : 작은거 그다음 작은거 더해서 *2
    // 가장 큰 둘레 길이: 큰거 그다음 큰거 더해서 *2
    // 가장 큰 둘레 길이 - 가장 작은 둘레 길이 = 가장 큰거 - 가장 작은거 *2
    
    return (Math.max(...lines) - Math.min(...lines)) * 2;
}

console.log(solution(x1, y1, x2, y2, x3, y3));