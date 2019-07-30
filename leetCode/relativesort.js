var relativeSortArray = function(arr1, arr2) {
    let sub_arr = {}; 
    let remainder = [];
    let res = [];
    for(let i = 0; i < arr2.length; i++) {
        sub_arr[arr2[i]] = []; 
    };
    
    for(let i = 0; i < arr1.length; i++) {
        if (sub_arr[arr1[i]]) {
            sub_arr[arr1[i]].push(arr1[i]); 
        } else {
            remainder.push(arr1[i]);
        }
    };
    
    for(let i = 0; i < arr2.length; i++) {
        res = res.concat(sub_arr[arr2[i]]); 
    };
    
    remainder = remainder.sort((a,b) => a-b);
    res = res.concat(remainder);
    
    return res;
    
};