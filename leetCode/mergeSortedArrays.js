var merge = function(nums1, m, nums2, n) {
    let j = 0;
    for (let i = m; m < nums1.length; i++) {
        if (nums2[j] == undefined) break;
        nums1[i] = nums2[j];
        j++;
    };
    
    let i = m; 
    while (i < m + n) {
        let j = i-1;
        let k = i;
        while (j >= 0 && nums1[j] > nums1[k]) {
            [nums1[j], nums1[k]] = [nums1[k], nums1[j]];
            j--;
            k--;
        };
        i++;
    };
    
    return nums1;
    
};
