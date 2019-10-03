var permute = function(nums) {
    if (nums.length < 1) return [[]];
    
    let result = [[nums[0]]];
    
    let i = 1;
    while (i < nums.length) {
        let newPermutationsCombination = [];
        result.forEach(perm => {
            newPermutationsCombination = newPermutationsCombination.concat(buildNewPermutations(perm,nums[i]));
        })
        result = newPermutationsCombination;
        i++;
    }

    return result;
};

const buildNewPermutations = function(array,number) {
    let res = []; 
    for (let i = 0; i < array.length; i++) {
        let permutation;
        if (!i) {
            permutation = [number,...array]
            res.push(permutation);
        }
        permutation = [...array.slice(0,i+1),number, ...array.slice(i+1,array.length)];
        res.push(permutation);
    }
    
    return res;
}