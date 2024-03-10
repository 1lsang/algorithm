function solution(scores) {    
    const wh = scores[0];
    const minScores = scores.filter((a) => (scores[0][0] + scores[0][1]) < (a[0] + a[1]));
    minScores.unshift(wh)
    
    function canGetIncentive (score) {
        for (let i = 1; i < minScores.length; i++) {
            if (score[0] < minScores[i][0] && score[1] < minScores[i][1]) return false;
        }
        return true;
    }

    return canGetIncentive(wh) 
        ? minScores
            .filter(score => canGetIncentive(score))
            .sort((a, b) => (b[0] + b[1]) - (a[0] + a[1]))
            .findIndex(score => score === wh) + 1
        : -1
}