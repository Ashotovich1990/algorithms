function countingSort(arr, max) {
    let counter = new Array(max + 1).fill(0); 

    for (let i = 0; i < arr.length; i++) {
        counter[arr[i]]++;
    }

    let res = []; 

    for (let i = 0; i < counter.length; i++) {
            while (counter[i] > 0) {
                res.push(i);
                counter[i]--;
            }
        
    }

    return res;
}


module.exports = {
    countingSort
};