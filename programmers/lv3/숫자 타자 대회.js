function solution(numbers) {
    const w = [
        [1, 7, 6, 7, 5, 4, 5, 3, 2, 3], // 0
        [7, 1, 2, 4, 2, 3, 5, 4, 5, 6], // 1
        [6, 2, 1, 2, 3, 2, 3, 5, 4, 5], // 2
        [7, 4, 2, 1, 5, 3, 2, 6, 5, 4], // 3
        [5, 2, 3, 5, 1, 2, 4, 2, 3, 5], // 4
        [4, 3, 2, 3, 2, 1, 2, 3, 2, 3], // 5
        [5, 5, 3, 2, 4, 2, 1, 5, 3, 2], // 6
        [3, 4, 5, 6, 2, 3, 5, 1, 2, 4], // 7
        [2, 5, 4, 5, 3, 2, 3, 2, 1, 2], // 8
        [3, 6, 5, 4, 5, 3, 2, 4, 2, 1], // 9
    ];
    
    const nums = numbers.split('').map(Number);
    const cache = Array.from(
        { length: numbers.length + 1 }, 
        () => Array.from({ length: 10 }, () => Array(10).fill(700001))
    );
    
    cache[0][4][6] = 0;
    
    for (let n = 0; n < nums.length; n++) {
        const cur = nums[n];
        const prev = cache[n];
        const now = cache[n+1];
        for (let l = 0; l < 10; l++) {
            for (let r = 0; r < 10; r++) {
                const prevValue = prev[l][r];
                if (l === r || cache[n][l][r] === 700001) continue;
                if (now[cur][r] > prevValue + w[l][cur]) now[cur][r] = prevValue + w[l][cur];
                if (now[l][cur] > prevValue + w[r][cur]) now[l][cur] = prevValue + w[r][cur];
            }
        }
    }
    
    return Math.min(...cache[nums.length].flat(2));
}