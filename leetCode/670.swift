class Solution {
    func maximumSwap(_ num: Int) -> Int {
        var digits: [Int] = []
        var numCopy = num 
        var result = 0
        
        while numCopy > 0 {
            digits.insert(numCopy % 10, at: 0)
            numCopy /= 10 
        }
        
        for i in 0..<(digits.count-1) {
            var max = i
            for j in i+1..<digits.count {
                if digits[j] >= digits[max] {
                    max = j
                }
            }
            
            if digits[max] != digits[i] {
                var temp = digits[i]
                digits[i] = digits[max]
                digits[max] = temp
                break
            }
        }
        
        var size = digits.count - 1
        
        for digit in digits {
            result += digit * Int(pow(Double(10), Double(size)))
            size -= 1
        }
        
        return result
        
    }
}