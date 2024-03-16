function solution(numbers) {
    const answer = Array(numbers.length).fill(-1);
    const s = [];

    for (let i = numbers.length - 1; i >= 0; i--) {
        while (s.length > 0 && numbers[i] >= s.at(-1)) s.pop();
        if (s.length !== 0) answer[i] = s.at(-1);
        s.push(numbers[i]);
    }
    return answer;
}