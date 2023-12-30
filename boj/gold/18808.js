"use strict"

const [[n, m, k], ...inputs] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

const sizes = [];
const stickers = [];

let idx = 0;

for (let i = 0; i < k; i++) {
    let [r, c] = inputs[idx++];
    const sticker = [];
    for (let j = 0; j < r; j++) {
        sticker.push(inputs[idx++]);
    }
    sizes.push([r, c]);
    stickers.push(sticker);
}

function solution(n, m, k, sizes, stickers) {
    const laptop = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));

    const dx = [1, 1, -1, -1];
    const dy = [1, -1, -1, 1];
    
    // 스티커 붙이기
    function paste (x, y, r, c, sticker) {
        let canPaste = true;
        // 붙일 수 있는지 확인
        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                if (sticker[i][j] && laptop[x+i][y+j]) {
                    canPaste = false;
                    break;
                }
            }
            if (!canPaste) return false;
        }

        // 붙이기
        for (let i = 0; i < r; i++)
            for (let j = 0; j < c; j++)
                if (sticker[i][j]) laptop[x+i][y+j] = 1;

        return true;
    }

    // 스티커 회전
    function rotate (r, c, dir, sticker) {
        const arr = [];
        const isRotated = dir%2===1
        for(let i = (dx[dir] > 0) ? 0 : r-1; (dx[dir] > 0) ? (i < r) : (i >= 0); i+=dx[dir]) {
            const a = [];
            for(let j = (dy[dir] > 0) ? 0 : c-1; (dy[dir] > 0) ? (j < c) : (j >= 0); j+=dy[dir]) {
                a.push(!isRotated ? sticker[i][j] : sticker[j][i]);
            }
            arr.push(a);
        }
        return arr;
    }

    for (let i = 0; i < k; i++) {
        let pasted = false;
        for (let dir = 0; dir < 4; dir++) {
            const [r, c] = (dir % 2 === 1) ? [sizes[i][1], sizes[i][0]] : sizes[i];
            // 1. 스티커 회전
            const sticker = rotate(r, c, dir, stickers[i]);
            // 2. 스티커 붙이기 -> 만약 붙었다면 for문 break;
            for (let x = 0; x < n - r + 1; x++) {
                for (let y = 0; y < m - c + 1; y++) {
                    if (pasted) break;
                    pasted = paste(x, y, r, c, sticker);
                }
                if (pasted) break;
            }
            if (pasted) break;
        }
    }

    return laptop.reduce((cnt, row) => cnt + row.reduce((cnt, col) => cnt + col ,0), 0);
}

console.log(solution(n, m, k, sizes, stickers));
