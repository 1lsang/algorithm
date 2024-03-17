function solution(cards) {
    const vis = Array(cards.length).fill(false);
    const counts = [];
    let length = 0;
    
    let i = 0;
    while (length < cards.length) {
        for (let j = 0; j < cards.length; j++) {
            if (vis[j]) continue;
            i = j;
            break;
        }
        
        const group = [];
        
        while (!vis[i]) {
            group.push(cards[i]);
            length++;
            vis[i] = true;
            i = cards[i] - 1;
        }
        
        counts.push(group.length);
    }
    
    counts.sort((a, b) => b - a);
    
    return counts[1] ? counts[0] * counts[1] : 0;
}