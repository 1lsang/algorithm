"use strict"

const field = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(str => str.split(''));


function solution(field){

    function gravity() {
        for (let c = 0; c < 6; c++) {
            let floor = 11;
            for (let i = 11; i >= 0; i--) {
                if (field[i][c] === '.') break;
                floor--;
            }
            for (let r = floor; r >= 0; r--) {
                if (field[r][c] !== '.') {
                    field[floor--][c] = field[r][c];
                    field[r][c] = '.';
                }
            }
        }
    }

    
    function puyo(start, visited) {
        let cnt = 1;
        const s = [];
        const pos = [];
        const dx = [1, 0, -1, 0];
        const dy = [0, 1, 0, -1];
        const color = field[start[0]][start[1]];
        s.push(start);
        pos.push(start);
        visited[start[0]][start[1]] = true;
        while(s.length > 0) {
            const [x, y] = s.pop();
            for (let dir = 0; dir < 4; dir++) {
                const nx = x + dx[dir];
                const ny = y + dy[dir];
                if (nx < 0 || nx >= 12 || ny < 0 || ny >= 6) continue;
                if (visited[nx][ny] || field[nx][ny] !== color) continue;
                s.push([nx, ny]);
                visited[nx][ny] = true;
                pos.push([nx, ny]);
                cnt++;
            }
        }
        if (cnt >= 4) {
            for (let [x, y] of pos) {
                field[x][y] = '.';
            }
        }
        
        return cnt >= 4
    }

    let answer = 0;

    let isPuyoed = true;
    while (isPuyoed) {
        isPuyoed = false;
        const visited = Array.from({ length: 12 }, () => Array.from({length: 6}, () => false));
        for (let c = 0; c < 6; c++) {
            for (let r = 11; r >= 0; r--) {
                if (field[r][c] === '.' || visited[r][c]) continue;
                if (puyo([r, c], visited)) {
                    isPuyoed = true;
                }
            }
        }
        if (isPuyoed) answer++;
        gravity();
    }
    
    return answer;
}

console.log(solution(field));