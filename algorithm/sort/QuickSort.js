const arr = Array.from({ length: 10 }, () => parseInt(Math.random() * 10));

function swap(idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function quickSort(start, end) {
    if (end <= start+1) return;
    const pivot = arr[start];
    let l = start + 1;
    let r = end - 1;
    while (true) {
        while (l <= r && arr[l] <= pivot) l++;
        while (l <= r && arr[r] >= pivot) r--;
        if (l > r) break;
        swap(l, r);
    }
    swap(start, r);
    quickSort(start, r);
    quickSort(r+l, end);
}

console.log(arr);
quickSort(0, arr.length)
console.log(arr);