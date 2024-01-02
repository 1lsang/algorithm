"use strict"

const [[n, m], ...city] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(n, m, city) {
    const answer = [];
    // r행 c열, 1부터 시작
    // 치킨 거리: 집과 가장 가까운 치킨집 사이의 거리
    // 도시의 치킨 거리: 모든 집의 치킨 거리의 합
    const houses = [];
    const stores = [];
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if(city[r][c] === 1) houses.push([r, c])
            else if (city[r][c] === 2) stores.push([r, c, false]);
        }
    }

    // 치킨 거리 구하기
    function distance() {
        const dist = [];
        for (let [hr, hc] of houses) {
            let cd = 100;
            for (let [sr, sc, isUsed] of stores) {
                if (isUsed) cd = Math.min(cd, Math.abs(hr-sr) + Math.abs(hc-sc));
            }
            dist.push(cd);
        }
        return dist.reduce((a, b) => a + b, 0);
    }

    // 백트래킹으로 탐색
    function bt(k, last) {
        if (k === m) return answer.push(distance());
        for (let i = last; i < stores.length; i++) {
            if (stores[i][2]) continue;
            stores[i][2] = true;
            bt(k+1, i+1);
            stores[i][2] = false;
        }
    }

    bt(0, 0);

    return Math.min(...answer);
}

console.log(solution(n, m, city));