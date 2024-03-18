function solution(sequence, k) {
    const answers = [];
    
    const q = [];
    let head = 0;
    let tail = 0;
    const push = (x) => q[tail++] = x;
    const pop = () => q[head++];
    
    let sum = 0;
    
    for (let i = 0; i <= sequence.length;) {
        if (sum < k) {
            push(sequence[i]);
            sum += sequence[i];
            i++;
        }
        else if (sum === k) {
            answers.push([head, tail-1]);
            sum -= pop();
        }
        while (sum > k) sum -= pop();
    }
    
    answers.sort((a, b) => {
        if (b[1] - b[0] === a[1] - a[0]) return a[0] - b[0];
        return (a[1] - a[0]) - (b[1] - b[0]);
    })
    
    return answers[0];
}