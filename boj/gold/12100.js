"use strict"

const [[n], ...board] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(n, board) {
    let answer = 0;
    function move(board, dir) {
        // dir - 0: 상 / 1: 좌 / 2: 하 / 3: 우
        // Case: 위로 이동
        // 1. 위에서 아래로 탐색
        // 2. 0일 경우 continue, 0보다 클 경우 위로 이동
        // 3. 맨 위의 숫자가 현재 숫자와 동일할 경우 합치기 (합쳐진 블록인지 체크해야함)
        // 4. 반복
        // 나머지 방향에 대해서도 동일하게 방향과 index 순서를 잘 체크하고 수행
        if (dir === 0) {
            for (let i = 0; i < n; i++) {
                let cur = 0;
                for (let j = 1; j < n; j++) {
                    if (board[j][i] === 0) continue;
                    if (board[cur][i] === 0) {
                        board[cur][i] = board[j][i];
                        board[j][i] = 0;
                    }
                    else if (board[cur][i] === board[j][i]) {
                        board[cur][i] += board[j][i];
                        board[j][i] = 0;
                        cur++;
                    }
                    else {
                        cur++;
                        board[cur][i] = board[j][i];
                        if (j!== cur) board[j][i] = 0;
                    }
                }
            }
        }
        else if (dir === 1) {
            for (let i = 0; i < n; i++) {
                let cur = n-1;
                for (let j = n-2; j >= 0; j--) {
                    if (board[j][i] === 0) continue;
                    if (board[cur][i] === 0) {
                        board[cur][i] = board[j][i];
                        board[j][i] = 0;
                    }
                    else if (board[cur][i] === board[j][i]) {
                        board[cur][i] += board[j][i];
                        board[j][i] = 0;
                        cur--;
                    }
                    else {
                        cur--;
                        board[cur][i] = board[j][i];
                        if (j!== cur) board[j][i] = 0;
                    }
                }
            }
        }
        else if (dir === 2) {
            for (let i = 0; i < n; i++) {
                let cur = 0;
                for (let j = 1; j < n; j++) {
                    if (board[i][j] === 0) continue;
                    if (board[i][cur] === 0) {
                        board[i][cur] = board[i][j];
                        board[i][j] = 0;
                    }
                    else if (board[i][cur] === board[i][j]) {
                        board[i][cur] += board[i][j];
                        board[i][j] = 0;
                        cur++;
                    }
                    else {
                        cur++;
                        board[i][cur] = board[i][j];
                        if (j!== cur) board[i][j] = 0;
                    }
                }
            }
        }
        else if (dir === 3) {
            for (let i = 0; i < n; i++) {
                let cur = n-1;
                for (let j = n-2; j >= 0; j--) {
                    if (board[i][j] === 0) continue;
                    if (board[i][cur] === 0) {
                        board[i][cur] = board[i][j];
                        board[i][j] = 0;
                    }
                    else if (board[i][cur] === board[i][j]) {
                        board[i][cur] += board[i][j];
                        board[i][j] = 0;
                        cur--;
                    }
                    else {
                        cur--;
                        board[i][cur] = board[i][j];
                        if (j!== cur) board[i][j] = 0;
                    }
                }
            }
        }   
    }

    function bt(k, origin) {
        if (k === 5) return answer = Math.max(answer, origin.reduce((val, arr) => Math.max(val, arr.reduce((val, cur) => Math.max(val, cur), 0)), 0));
        for (let dir = 0; dir < 4; dir++) {
            const board = origin.map(arr => [...arr]);
            move(board, dir)
            bt(k+1, board);
        }
        
    }

    bt(0, board);

    return answer;
}

console.log(solution(n, board));