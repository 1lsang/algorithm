"use strict"

const [[n, m, x, y, k], ...inputs] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

const cmds = inputs.pop();
const map = [...inputs];

function solution(n, m, x, y, k, map, cmds) {
    const answers = [];
    const dice = [[0, 0, 0, 0], [0, 0]];

    function move(n) {
        switch(n) {
            case 1:
                [dice[0][1], dice[0][3], dice[1][0], dice[1][1]] = [dice[1][0], dice[1][1], dice[0][3], dice[0][1]]; // 동
                break;
            case 2:
                [dice[0][1], dice[0][3], dice[1][0], dice[1][1]] = [dice[1][1], dice[1][0], dice[0][1], dice[0][3]]; // 동
                break;
            case 3:
                dice[0].push(dice[0].shift()); // 북
                break;
            case 4:
                dice[0].unshift(dice[0].pop()); // 남
                break;
            default:
                break;
        }
        answers.push(dice[0][1]);
    }
    

    // 지도 위에서 이동 방향
    const dx = [0, 0, 0, -1, 1];
    const dy = [0, 1, -1, 0, 0];

    for (let i = 0; i < k; i++) {
        x += dx[cmds[i]];
        y += dy[cmds[i]];

        if (x < 0 || x >= n || y < 0 || y >= m) {
            x -= dx[cmds[i]];
            y -= dy[cmds[i]];
            continue;
        }
        move(cmds[i]);
        if (map[x][y] === 0) {
            map[x][y] = dice[0][3];
        }
        else {
            [map[x][y], dice[0][3]] = [0, map[x][y]];
        }
    }

    return answers.join('\n');
}

console.log(solution(n, m, x, y, k, map, cmds));