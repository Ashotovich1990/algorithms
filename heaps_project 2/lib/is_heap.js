// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
    let left; 
    let right;
    for (let i = 1; i < array.length; i++) {
        if (!array[i]) return false; 
        left = array[i*2]; 
        right = array[i*2 + 1]

        if (!left && right) return false; 
        if (left && !right) {
            if (array[left] > array[i]) return false; 
        }
        if (left && right) {
            if (Math.max(left,right) > array[i]) return false;
        }
    }
    return true;
}


module.exports = {
    isMaxHeap
};