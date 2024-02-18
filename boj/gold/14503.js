// Gold 5 로봇 청소기
"use strict"

const [[n, m], [r, c, d], ...room] = require('fs').readFileSync('./dev/stdin').toString().split('\n').map(str => str.split(' ').map(Number));

function solution(n, m, r, c, d, room) {
    let answer = 0;

    const vis = room.map(arr => arr.map(x => x === 1 ? 2 : x));

    const robot = {
        power: true,
        dir: d
    };

    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    while (robot.power) {
        // 1. 현재 칸이 아직 청소되지 않은 경우, 현재 칸을 청소한다.
        if (vis[r][c] === 0) {
            vis[r][c] = 1;
            answer++;
        }

        // 2.  현재 칸의 주변 4칸 중 청소되지 않은 빈 칸이 없는 경우,
        if (!([0, 1, 2, 3].some((dir) => vis[r + dx[dir]][c + dy[dir]] === 0))) {
            // 1. 바라보는 방향을 유지한 채로 한 칸 후진할 수 있다면 한 칸 후진하고 1번으로 돌아간다.
            if (!(room[r + dx[robot.dir] * -1][c + dy[robot.dir] * -1] === 1)) {
                r += dx[robot.dir] * -1;
                c += dy[robot.dir] * -1;
            }
            // 2. 바라보는 방향의 뒤쪽 칸이 벽이라 후진할 수 없다면 작동을 멈춘다.
            else {
                robot.power = false;
            }
        }
        // 3. 현재 칸의 주변 4칸 중 청소되지 않은 빈 칸이 있는 경우,
        else {
            // 1. 반시계 방향으로 90도 회전한다.
            robot.dir += 3;
            robot.dir %= 4;
            // 2. 바라보는 방향을 기준으로 앞쪽 칸이 청소되지 않은 빈 칸인 경우 한 칸 전진한다.
            const nr = r + dx[robot.dir];
            const nc = c + dy[robot.dir];
            if ((nr > 0 && nr <= n && nc > 0 && nc <= m) && (vis[nr][nc] === 0)) {
                r = nr;
                c = nc;
            }
        }
        // Debug
        // console.log(vis.map(arr => arr.join('')).join('\n') + '\n');
    }

    return answer;
}

console.log(solution(n, m, r, c, d, room));