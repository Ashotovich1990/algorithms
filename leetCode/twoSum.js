// two sum unsroted
var twoSum = function(numbers, target) {
    let counter = {};
    
    for (let i = 0; i < numbers.length; i++) {
        if (counter[target-numbers[i]]) return [counter[target-numbers[i]],i+1]; 
        counter[numbers[i]] = i+1;
    };
};

// if sorted burte forse
var twoSum = function(numbers, target) {
    let counter = {};
    let j = 0; 
    while (j < numbers.length && numbers[j] <= target) {
        j++;
    };
    
    for (let i = 0; i <= j; i++) {
        if (counter[target-numbers[i]]) return [counter[target-numbers[i]],i+1]; 
        counter[numbers[i]] = i+1;
    };
};

// sorted optimzed 
var twoSum = function(nums, target) {
    let first = 0; 
    let last = nums.length-1;
    
    while (first !== last) {
        if (nums[first] + nums[last] === target) return [first+1,last+1];
        if (nums[first] + nums[last] < target) {
            first++;
        } else {
            last--;
        };      
    };
};