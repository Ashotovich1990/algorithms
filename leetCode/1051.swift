class Solution {
    func heightChecker(_ heights: [Int]) -> Int {
        var result = 0
        var sortedHeights = heights.map { $0 }
        sortedHeights.sort()
        
        for idx in 0..<heights.count {
            if heights[idx] != sortedHeights[idx] {
                result += 1
            }
        }
        
        return result
    }
}