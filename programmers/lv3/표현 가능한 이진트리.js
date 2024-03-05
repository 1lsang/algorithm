"use strict"

function solution(numbers) {

    function isTree(number) {
        const bin = number.toString(2);
        
        const tree = bin.padStart(2 ** bin.length.toString(2).length - 1, '0');
        
        function check(str, l, r) {
            if (l === r) return true;
            
            const mid = Math.floor((l + r) / 2);
            const child1 = Math.floor((l + mid-1) / 2);
            const child2 = Math.floor((mid+1 + r) / 2);
            
            if (str[mid] === '0' && ((str[child1] === '1') || (str[child2] === '1'))) return false;
            
            if (!check(str, l, mid-1)) return false;
            if (!check (str, mid+1, r)) return false;
            return true;
        }

        return check(tree, 0, tree.length - 1) ? 1 : 0;
    }
    
    
    return numbers.map(isTree);
}