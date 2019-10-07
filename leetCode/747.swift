class Solution {
    func dominantIndex(_ nums: [Int]) -> Int {
        var result = 0
        var largest = nums[0]
        var secondLargest: Int?
        
        for idx in 1..<nums.count {
            if nums[idx] > largest {
                secondLargest = largest
                largest = nums[idx]
                result = idx
            } else if (secondLargest == nil || nums[idx] > secondLargest!) {
                secondLargest = nums[idx]
            }
        }
        
        if let second = secondLargest {
            return largest >= second * 2 ? result : -1
        } else {
            return result
        }
    }
}