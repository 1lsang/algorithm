"use strict"

const [[n, m], ...boards] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(n, m, boards) {
    let answer = n * m;
    const cctv = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (boards[i][j]!==0 && boards[i][j]!==6) cctv.push([i, j]);
        }
    }

    function count() {
        return boards.reduce((cnt, col)=> cnt + col.reduce((cnt, cur) =>  cur === 0 ? cnt + 1 : cnt, 0), 0);
    }

    function watch(col, row, dir, arr) {
        if (dir === 0) {
            for (let i = row; i < m; i++) {
                if (boards[col][i]===6) break;
                if (boards[col][i]===0) {
                    boards[col][i] = '#';
                    arr[i] = true;
                }
                else arr[i] = false;
            }
        }
        else if (dir === 1) {
            for (let i = col; i >= 0; i--) {
                if (boards[i][row]===6) break;
                if (boards[i][row]===0) {
                    boards[i][row] = '#';
                    arr[i] = true;
                }
                else arr[i] = false;
            }
        }
        else if (dir === 2) {
            for (let i = row; i >= 0; i--) {
                if (boards[col][i]===6) break;
                if (boards[col][i]===0) {
                    boards[col][i] = '#';
                    arr[i] = true;
                }
                else arr[i] = false;
            }
        }
        else if (dir === 3) {
            for (let i = col; i < n; i++) {
                if (boards[i][row]===6) break;
                if (boards[i][row]===0) {
                    boards[i][row] = '#';
                    arr[i] = true;
                }
                else arr[i] = false;
            }
        }
    }

    function unwatch(col, row, dir, arr) {
        if (dir === 0) {
            for (let i = row; i < m; i++) {
                if (boards[col][i]===6) break;
                else if (boards[col][i]==='#' && arr[i]) boards[col][i] = 0;
            }
        }
        else if (dir === 1) {
            for (let i = col; i >= 0; i--) {
                if (boards[i][row]===6) break;
                else if (boards[i][row]==='#' && arr[i]) boards[i][row] = 0;
            }
        }
        else if (dir === 2) {
            for (let i = row; i >= 0; i--) {
                if (boards[col][i]===6) break;
                else if (boards[col][i]==='#' && arr[i]) boards[col][i] = 0;
            }
        }
        else if (dir === 3) {
            for (let i = col; i < n; i++) {
                if (boards[i][row]===6) break;
                else if (boards[i][row]==='#' && arr[i]) boards[i][row] = 0;
            }
        }
    }

    const dir = [,
        [[0], [1], [2], [3]],
        [[0, 2], [1, 3]], 
        [[0, 1], [1, 2], [2, 3], [3, 0]], 
        [[0, 1, 2], [1, 2, 3], [2, 3, 0], [3, 0, 1]], 
        [[0, 1, 2, 3]]
    ];

    function run(k) {
        if (k === cctv.length) {
            return answer = Math.min(answer, count());
        }
        let [col, row] = cctv[k];
        for (let d of dir[boards[col][row]]) {
            const arr = Array.from({length: d.length}, ()=>[]);
            for (let i = 0; i < d.length; i++) {
                watch(col, row, d[i], arr[i]);
            }
            run(k+1);
            for (let i = 0; i < d.length; i++) {
                unwatch(col, row, d[i], arr[i]);
            }
        }
    }

    run(0);

    return answer;
}

console.log(solution(n, m, boards));