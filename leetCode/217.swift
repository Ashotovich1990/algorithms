class Solution {
    func containsDuplicate(_ nums: [Int]) -> Bool {
        var seen = Dictionary<Int,Bool>()
        for number in nums {
            if seen[number] != nil {
                return true
            } else {
                seen[number] = true
            }
        }
        
        return false;
    }
}