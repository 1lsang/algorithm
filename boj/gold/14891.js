"use strict"

const [gear1, gear2, gear3, gear4, [k], ...rotations] = require('fs')
    .readFileSync('./dev/stdin').toString().trim()
    .split('\n').map((str, idx) => str.split(idx < 4 ? '' : ' ').map(Number));

function solution(gear1, gear2, gear3, gear4, k, rotations) {
    const gear = [[], gear1, gear2, gear3, gear4];
    const p = [0, 0, 0, 0, 0];

    function rotate(idx, dir, prev) {
        const compare = [[], [0, 0], [0, 0], [0, 0], [0, 0]];

        for (let i = 1; i < 4; i++) {
            if (gear[i].at((p[i]+2)%8) !== gear[i+1].at((p[i+1]-2)%8)) {
                compare[i][1] = 1;
                compare[i+1][0] = 1;
            }
        }

        let l = idx-1;
        let r = idx+1;
        dir *= -1;
        p[idx]+=dir;
        while (l > 0 || r <= 4) {
            dir*=-1;
            if (l > 0) {
                if (compare[l][1]) p[l--]+=dir;
                else l = 0;
            }
            if (r <= 4) {
                if (compare[r][0]) p[r++]+=dir;
                else r = 5;
            }
        }
    }

    for (let i = 0; i < k; i++) {
        const [idx, dir] = rotations[i];
        rotate(idx, dir, 0);
    }
    
    return p.reduce((score, tw, i) => score + ((gear[i].at(tw%8) === 1) ? 2**(i-1) : 0), 0);
}

console.log(solution(gear1, gear2, gear3, gear4, k, rotations));