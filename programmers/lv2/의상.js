function solution(clothes) {
    const clothesObject = {};
    clothes.forEach(([name, type])=>{
        if (clothesObject[type]) clothesObject[type].push(name);
        else clothesObject[type] = [name];
    });
    let answer = 1;
    for(let type in clothesObject) {
        answer *= clothesObject[type].length+1;
    }
    return answer-1;
}