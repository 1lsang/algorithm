function solution(triangle) {
    const sum = Array.from(Array(triangle.length), () => Array(triangle.length).fill(0));
    sum[0][0] = triangle[0][0];
    for (let i = 1; i < triangle.length; i++) {
        const line = triangle[i];
        for (let j = 0; j < line.length; j++) {
            sum[i][j] = Math.max(sum[i-1][j-1] ? sum[i-1][j-1] : 0, sum[i-1][j]) + triangle[i][j];
        }
    }
    
    return Math.max(...sum.at(-1));
}