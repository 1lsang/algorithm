"use strict"

function solution(progresses, speeds) {
    const answer = [];
    while (progresses.length>0) {
        progresses.forEach((progress, index)=>{
            progresses[index] = progress+speeds[index]
        })
        if (progresses[0]>=100) {
            let cnt = 0;
            while (progresses[0]>=100) {
                progresses.shift();
                speeds.shift();
                cnt++;
            }
            answer.push(cnt)
        }
    }   
    return answer;
}