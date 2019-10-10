class Solution {
    var memo: [Int: Int] = [:]
    
    func minCostClimbingStairs(_ cost: [Int], stair: Int = 0) -> Int {
        if stair >= cost.count - 1 { return 0 }
       
        if let result = self.memo[stair] {
            return result
        } else {
            var takeOneStep = cost[stair] + self.minCostClimbingStairs(cost, stair: stair + 1)
            var takeTwoStep = cost[stair+1] + self.minCostClimbingStairs(cost, stair: stair + 2)
            self.memo[stair] = min(takeOneStep, takeTwoStep)
            return memo[stair]!
        }
    }
}

// iterative 
class Solution {
    func minCostClimbingStairs(_ cost: [Int]) -> Int {
        var oneStep = 0 
        var twoStep = 0 
        var stair = cost.count - 1
        
        while stair >= 0 {
            var stairCost = cost[stair] + min(oneStep, twoStep)
            twoStep = oneStep
            oneStep = stairCost 
            stair -= 1
        }
        
        return min(oneStep, twoStep)
        
    }
}