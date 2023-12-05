function solution(clothes) {
    return Object.values(
        clothes.reduce((obj,[_, t])=>{
            obj[t] = obj[t] ? obj[t]+1 : 1;
            return obj
        }, {})).reduce((acc, cur)=> acc*(cur+1), 1)-1;
}