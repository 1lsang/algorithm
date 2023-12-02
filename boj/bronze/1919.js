const [ word1, word2 ] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');

function solution(word1, word2) {
    const arr1 = Array.from({length: 26}, ()=>0)
    const arr2 = Array.from({length: 26}, ()=>0)

    for(let str of word1) {
        arr1[str.charCodeAt()-97]++;
    }

    for(let str of word2) {
        arr2[str.charCodeAt()-97]++;
    }

    let cnt = 0;
    for (let i=0; i<26; i++) {
        if (arr1[i]>0 && arr2[i]>0) cnt+=Math.min(arr1[i], arr2[i]);
    }
    
    return word1.length + word2.length - 2 * cnt;
}

console.log(solution(word1, word2));