"use strict"

const [n, ...inputs] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');

function solution(input) {
    // input의 길이: 1 ≤ M ≤ 1,000,000
    // MX를 1,000,000으로 설정시 메모리 초과
    // JS에서는 stack 두 개를 사용해서 푸는 것이 더 좋은 선택으로 보임.
    const MX = 1000000;
    const data = Array(MX);
    const prev = Array(MX).fill(-1);
    const next = Array(MX).fill(-1);
    data[0] = '';
    let unused = 1;

    function insert(addr, value) {
        // 1. 데이터 추가
        data[unused] = value;
        // 2. 이전 노드와 연결
        prev[unused] = addr;
        // 3. 다음 노드와 연결
        next[unused] = next[addr];
        // 4. 다음 노드 처리: 다음 노드의 prev 변경
        if (prev[next[unused]] !== -1) prev[next[addr]] = unused;
        // 5. 이전 노드 처리: 이전 노드의 next 변경
        next[addr] = unused;
        // 6. unused 증가
        unused++;
    }

    function remove(addr) {
        // 1. 이전 노드 처리: 이전 노드의 next 변경
        next[prev[addr]] = next[addr];
        // 2. 다음 노드 처리: 다음 노드의 prev 변경
        if (next[addr]!==-1) prev[next[addr]] = prev[addr];
    }

    function traverse() {
        let answer = '';
        for (let cur = next[0]; cur !== -1; cur = next[cur]) {
            answer += data[cur];
        }
        return answer;
    }

    let cursor = 0;

    input.split('').forEach((key,i) => {
        if (key === '<') {
            if (prev[cursor]!==-1) cursor = prev[cursor];
        }
        else if (key === '>') {
            if (next[cursor]!==-1) cursor = next[cursor];
        }
        else if (key === '-') {
            if (prev[cursor]!==-1) {
                remove(cursor);
                cursor = prev[cursor];
            }
        }
        else {
            insert(cursor, key);
            cursor = next[cursor];
        }
    })
    
    return traverse();
}

inputs.forEach(input=>console.log(solution(input)));