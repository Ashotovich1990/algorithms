class Solution {
    func tribonacci(_ n: Int) -> Int {
        if n == 0 { return 0 }
        var tribonacciNumber = (first: 0, second: 0, third: 1)
        
        for number in 0..<n-1 {
            let newTribonacciNumber = tribonacciNumber.first + tribonacciNumber.second + tribonacciNumber.third
            tribonacciNumber = (tribonacciNumber.second, tribonacciNumber.third, newTribonacciNumber)
        }
       
        return tribonacciNumber.third
    }
}