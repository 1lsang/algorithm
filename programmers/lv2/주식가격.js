function solution(prices) {
    const stack = [];
    const answer = Array(prices.length).fill(0)
    
    for(let i=0; i<prices.length; i++) {
        for (let [_, i_s] of stack) {
            answer[i_s]++;
        }
        while (stack.length>0 
               && stack.at(-1)[0]>prices[i]) {
            stack.pop();
        }
        stack.push([prices[i], i]);
    }
    
    return answer;
}