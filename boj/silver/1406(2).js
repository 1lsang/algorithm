"use strict"

const [initialValue, m_str, ...inputs] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const m = Number(m_str);

function solution(initialValue, m, inputs) {
    const MX = 600000;
    const data = Array.from({length: MX});
    const prev = Array.from({length: MX}, (_, i)=> -1);
    const next = Array.from({length: MX}, (_, i)=> -1);
    data.push('');

    let unused = 1;
    let cursor = 0;

    function traverse() {
        let answer = ''
        for (let cur = next[0]; cur !== -1; cur = next[cur]) {
            answer += data[cur];
        }
        return answer;
    }

    function insert(addr, value) {
        data[unused] = value;
        prev[unused] = addr;
        next[unused] = next[addr];
        if (next[unused]!==-1) prev[next[addr]] = unused;
        next[addr] = unused;
        unused++;
    }

    function remove(addr) {
        next[prev[addr]] = next[addr];
        if (next[addr]!==-1) prev[next[addr]] = prev[addr];
    }

    for (let str of initialValue.split('')) {
        insert(cursor, str);
        cursor++;
    }
    

    for (let input of inputs) {
        const [cmd, value] = input.split(' ');

        if (cmd === "P") {
            insert(cursor, value);
            cursor = next[cursor];
        } 
        else if (cmd === "L") {
            if (prev[cursor]!==-1) cursor = prev[cursor];
        } 
        else if (cmd === "D") {
            if (next[cursor]!==-1) cursor = next[cursor];
        } 
        else if (cmd === "B") {
            if (prev[cursor]!==-1) {
                remove(cursor);
                cursor = prev[cursor];
            }
        }   
    }

    return traverse();
}

console.log(solution(initialValue, m, inputs));