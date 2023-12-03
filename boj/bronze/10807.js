const [n_str, input_str, v_str] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(n_str);
const num_list = input_str.split(' ').map(Number);
const v = Number(v_str);

function solution(n, num_list, v) {
    let cnt = 0;
    num_list.forEach((num)=>{
        if (num===v) cnt++;
    })
    return cnt
}

console.log(solution(n, num_list, v))