// 2024 KAKAO WINTER INTERSHIP

"use strict"

function solution(friends, gifts) {
    // 1. A, B != 0 && A === B인 경우, 더 많이 준 사람이 다음달에 1개 받음
    // 2. A = 0 || B = 0 || A !=== B인 경우, 선물지수가 더 큰 사람이 작은 사람에게 1개 받음
    // 선물 지수: 준 선물 - 받은 선물
    // 3. 선물지수도 같다면 선물을 주고받지 않음
    
    const answers = Array(friends.length).fill(0);
    
    // 문자열에서 index
    const index = Object.fromEntries(Object.entries(friends).map(arr => arr.reverse()));
    
    // 주고 받은 선물 테이블
    const table = Array.from({length : friends.length}, () => Array(friends.length).fill(0));
    
    // 선물 지수 계산 테이블
    const gTable = Array.from({length : friends.length}, () => Array(3).fill(0));
    
    for (let gift of gifts) {
        const [from, to] = gift.split(' ');
        table[index[from]][index[to]] += 1;
    }
    
    table.forEach((arr, from) => {
        arr.forEach((n, to) => {
            gTable[from][0] += n;
            gTable[to][1] += n;
        })
    });
    
    gTable.forEach(([from, to], idx) => gTable[idx][2] = from - to);
    
    for (let i = 0; i < friends.length; i++) {
        for (let j = 0; j < friends.length; j++) {
            if (i === j) continue;
            if (table[i][j] > table[j][i]) answers[i]++;
            else if (table[i][j] === table[j][i]) {
                if (gTable[i][2] > gTable[j][2]) answers[i]++;
            }
        }
    }
    
    return Math.max(...answers);
}