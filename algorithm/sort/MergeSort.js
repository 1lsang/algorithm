const arr = Array.from({ length: 10 }, () => parseInt(Math.random() * 10));

function merge(start, end) {
    const tmp = [];
    const mid = Math.floor((start + end) / 2);
    let idx1 = start;
    let idx2 = mid;
    for (let i = start; i < end; i++) {
        if (idx1 === mid) tmp.push(arr[idx2++]);
        else if (idx2 === end) tmp.push(arr[idx1++]);
        else if (arr[idx1] <= arr[idx2]) tmp.push(arr[idx1++]);
        else tmp.push(arr[idx2++]);
    }
    for (let i = 0; i < tmp.length; i++) {
        arr[start + i] = tmp[i];
    }
}

function mergeSort(start, end) {
    // 1. 배열의 길이가 1이 될 때까지 쪼갠다. 
    if (end === start + 1) return;
    const mid = Math.floor((start + end) / 2);
    mergeSort(start, mid);
    mergeSort(mid, end);
    // 2. 배열의 길이가 1이 되면 쪼갠 배열들을 합친다. 
    merge(start, end);
}

console.log(arr);
mergeSort(0, arr.length);
console.log(arr);