let result = [];
    
let idx = 0;
while (idx < nums.length) {
    while (idx + 1 != nums[idx]) {
        let number = nums[idx];
        if (nums[idx] === nums[number-1]) {
            break
        } else {
            nums[idx] = nums[number-1];  
            nums[number-1] = number;
        }
    }
    idx++;
}

for (let i = 0; i < nums.length; i++) {
    if (i + 1 != nums[i]) {
        return [nums[i], i + 1];
    }
}

};