class Solution {
    func removeDuplicates(_ nums: inout [Int]) -> Int {
        var count = 0 
        var idx = 0
        while idx < nums.count-1 {
            if nums[idx] == nums[idx+1] {
                if count == 0 {
                    count += 1
                } else {
                    while nums[idx] == nums[idx+1] {
                        nums.remove(at: idx+1)
                        if idx + 1 > nums.count - 1 { break }
                    }
                    count = 0
                }
            } else {
                count = 0
            }
            idx += 1
        }
        
        return nums.count
    }
}