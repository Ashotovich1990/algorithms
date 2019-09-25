// two sum unsroted
var twoSum = function(numbers, target) {
    let counter = {};
    
    for (let i = 0; i < numbers.length; i++) {
        if (counter[target-numbers[i]]) return [counter[target-numbers[i]],i+1]; 
        counter[numbers[i]] = i+1;
    };
};