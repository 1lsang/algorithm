"use strict"

const inputs = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
const lrcs = [];
const buildings = [];

for (let i = 0; i < inputs.length;) {
    const [l, r, c] = inputs[i++].split(' ').map(Number);
    if (l === 0 && r === 0 && c === 0) break;
    lrcs.push([l, r, c]);
    const building = [];
    for (let a = 0; a < l; a++) {
        const floors = [];
        for (let b = 0; b < r; b++) {
            floors.push(inputs[i++].split(''))
        }
        i++;
        building.push(floors);
    }
    buildings.push(building);
}

function solution(lrcs, buildings) {
    const answer = [];

    function escape(i) {
        const [l, r, c] = lrcs[i];
        const building = buildings[i];
        const end = [];

        const dist = Array.from({ length: l }, () => Array.from({ length: r }, () => Array(c).fill(0)));

        const q = [];
        let head = 0; 
        let tail = 0;
        const push = (x) => q[tail++] = x;
        const pop = () => q[head++];

        for (let i = 0; i < l; i++) {
            for (let j = 0; j < r; j++) {
                for (let k = 0; k < c; k++) {
                    if (building[i][j][k] === 'S') push([i, j, k]);
                    else if (building[i][j][k] === 'E') end.push(i, j, k);
                    else if (building[i][j][k] === '#') dist[i][j][k] = -1;
                }
            }
        }

        const dx = [1, 0, 0, -1, 0, 0];
        const dy = [0, 1, 0, 0, -1, 0];
        const dz = [0, 0, 1, 0, 0, -1];

        while (head < tail) {
            const [x, y, z] = pop();
            for (let dir = 0; dir < 6; dir++) {
                const nx = x + dx[dir];
                const ny = y + dy[dir];
                const nz = z + dz[dir];
                if (nx < 0 || nx >= l || ny < 0 || ny >= r || nz < 0 || nz >= c) continue;
                if (dist[nx][ny][nz] === -1 || dist[nx][ny][nz] > 0) continue;
                if (nx === end[0] && ny === end[1] && nz === end[2]) return `Escaped in ${dist[x][y][z] + 1} minute(s).`;
                push([nx, ny, nz])
                dist[nx][ny][nz] = dist[x][y][z] + 1;
            }
        }

        return 'Trapped!'
    }

    for (let i = 0; i < buildings.length; i++) {
        answer.push(escape(i));
    }

    return answer.join('\n');
}

console.log(solution(lrcs, buildings));
