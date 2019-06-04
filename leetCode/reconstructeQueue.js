var reconstructQueue = function(people) {
    let arr = people.sort((a,b) => a[0] - b[0]);
    
    let res = new Array(arr.length);
    
    for (let i = 0; i < arr.length; i++) {
        let pos = arr[i][1];
            if (res[pos] || !isPositioned(res,pos,arr[i])) {
                while (pos < res.length && (res[pos] || !isPositioned(res,pos,arr[i]))) {
                    pos++;
                }
            }
       res[pos] = arr[i]
    }
    
    return res;
};

var isPositioned = function(arr,idx,el) {
    let count = 0;
    if (idx < arr.length) {
    for (let i = 0; i < idx; i++) {
        
        if (!arr[i] || arr[i][0] >= el[0] ) {
            count++
        }
    } 
        return count === el[1];
    } 
    
    
}