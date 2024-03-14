function solution(picks, minerals) {
    let answer = 0;
    const piro = [
        [1, 1, 1],
        [5, 1, 1],
        [25, 5, 1]
    ]
    
    const m = [];
    
    for (let i = 0; i <= minerals.length / 5; i++) {
        const slice = {
            diamond: 0,
            iron: 0,
            stone: 0
        };
        for (let j = 0; j < 5; j++) {
            if (i*5 + j >= minerals.length) break;
            slice[minerals[i*5 + j]]++;
        }
        m.push(Object.values(slice));
    }

    while (picks.reduce((a,b) => a+b, 0) < m.length) m.pop();
    
    m.sort((a, b) => {
        if (!(a[0] - b[0] === 0)) return b[0] - a[0];
        if (!(a[1] - b[1] === 0)) return b[1] - a[1];
        return b[2] - a[2];
    })
    
    
    let p = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < picks[i]; j++) {
            answer += m[p].map((a, idx) => a*piro[i][idx]).reduce((a, b) => a+b, 0);
            p++;
            if (p >= m.length) break;
        }
        if (p >= m.length) break;
    }
    
    return answer;
}