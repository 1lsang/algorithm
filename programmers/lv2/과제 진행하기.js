// plans: [name, start, playtime]
function solution(plans) {
    const answer = [];
    
    // pause: [name, remainingtime] (멈춰둔 과제)
    const pause = [];
    // newPlans: [name, start, end] && sorted
    const newPlans = plans.map(([name, start, playtime]) => {
        const startMinutes = minutes(start);
        return [name, startMinutes, startMinutes + Number(playtime)]
    }).sort((a, b) => a[1] - b[1]);
    
    // return newPlans;
    let t = newPlans[0][1];
    let idx = 0;
    
    while (idx < plans.length) {
        const cur = newPlans[idx];
        const next = newPlans[idx+1];
        // console.log(t);
        // 현재 시각이 과제의 시작시간인 경우
        if (t <= cur[1]) {
            // 종료 시간이 다음 과제 시작시간 전인 경우
            if (!next || cur[2] <= next[1]) {
                t = cur[2];
                answer.push(cur[0]);
            }
            // 종료 시간이 다음 과제 시작시간 후인 경우
            else {
                t = next[1];
                pause.push([cur[0], cur[2] - next[1]]);
            }
            idx++;
        }
        
        if (!next) break;
        // 멈춘 일이 없으면 다음 과제 시작시간으로 바꾸기
        // 멈춘 일이 있으면 다음 과제 시작시간까지 멈춘일 하기
        while (pause.length > 0 && (t < next[1])) {
            const task = pause.pop();
            if (t + task[1] <= next[1]) {
                t += task[1];
                answer.push(task[0]);
            }
            else {
                pause.push([task[0], t + task[1] - next[1]]);
                t = next[1];
            }
        }
        
        t = next[1];
    }
    
    while (pause.length > 0) {
        answer.push(pause.pop()[0])
    }
    
    return answer;
}

function minutes(time) {
    const [h, m] = time.split(':').map(Number);
    return h * 60 + m;
}