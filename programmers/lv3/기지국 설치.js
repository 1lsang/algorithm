function solution(n, stations, w) {
    let answer = 0;
    let station;
    
    for (let s = n; s > 0; s = station - w - 1) {
        station = stations.pop();
        
        if (station + w >= n) continue;
        
        if (station) {
            answer += Math.ceil((s - (station + w)) / (2 * w + 1));
        }
        else {
            answer += Math.ceil(s / (2 * w + 1));
            break;
        }        
    }

    return answer;
}