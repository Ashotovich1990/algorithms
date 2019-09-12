var findRightInterval = function(intervals) {
    let res = [];
    
    let copy = intervals.map((el,idx) => [el[0],el[1],idx]).sort((a,b) => {
            if (a[0] === b[0]) {
                return a[1] - b[1];
            } else {
                return a[0] - b[0];
            };
    });
    
    for (let i = 0; i < copy.length; i++) {
        let intEnd = copy[i][1];
        let start = i+1;
        let end = copy.length-1;
        if (copy[start] && copy[start][0] >= intEnd) {
            res[copy[i][2]] = copy[start][2];
            continue;
        }
        while (start <= end) {
            let mid = Math.floor((start + end)/2);
            if (copy[start] && copy[start][0] >= intEnd) {
            res[copy[i][2]] = copy[start][2];
            break;
            }
            if (copy[mid][0] < intEnd) {
                start = mid + 1;
            } else {
                start = start + 1;
                end = mid;
            }; 
        };
        if (start > end) res[copy[i][2]] = -1;
    };
    
    return res;
};