"use strict"

const [a, b, c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt);

function solution(a, b, c) {
    // 모듈러 연산의 성질 (분배 법칙)
    // (A * B) % C === ((A % C) * (B % C)) % C
    // ((A % C) * (A % C)) === A^2 % C
    // ((A^n % C) * (A^n % C)) === A^2n % C
    // ((A^n % C) * (A^n % C) * A % C) === A^(2n+1) % C
    
    function pow_mod(a, b, c) {
        if (b === 1n) return a % c;
        let value = pow_mod(a, b/2n, c);
        value = value * value % c;
        return (b%2n === 0n) ? value : value * a % c;
    }

    return Number(pow_mod(a,b,c));
}

console.log(solution(a, b, c));