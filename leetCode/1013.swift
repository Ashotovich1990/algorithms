class Solution {
    func canThreePartsEqualSum(_ A: [Int]) -> Bool {
        var prevSum = A[0]
        var totalSumsByIndices:Set = [prevSum]
        var totalSumsDividedByTwo:Set<Int> = []
        
        for idx in 1..<A.count {
            prevSum += A[idx]
            totalSumsByIndices.insert(prevSum)
            if totalSumsByIndices.contains(prevSum/2) {
                totalSumsDividedByTwo.insert(prevSum/2)
            }
        }
        
        if totalSumsDividedByTwo.contains((prevSum/3)) {return true}
        
        return false
    }
}