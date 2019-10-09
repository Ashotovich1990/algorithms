class Solution {
    func triangleNumber(_ nums: [Int]) -> Int {
        var numsCopied = nums.map {$0}
        numsCopied.sort()
        
        var result = 0
        
        var idxFromEnd = numsCopied.count - 1
        while idxFromEnd > 1 {
            var start = 0 
            var end = idxFromEnd - 1
            while start < end {
                if numsCopied[start] + numsCopied[end] <= numsCopied[idxFromEnd] {
                    start += 1
                } else {
                    result += end - start
                    end -= 1
                }
            }
            idxFromEnd -= 1
        }
        
        return result
    }
}