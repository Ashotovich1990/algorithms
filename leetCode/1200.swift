class Solution {
    func minimumAbsDifference(_ arr: [Int]) -> [[Int]] {
        var result:[[Int]] = []
        var copy = arr.map {$0}
        copy.sort()
        var diff = copy[1] - copy[0]
        
        for idx in 0..<(copy.count-1) {
            if diff == 1 { break }
            if copy[idx+1] - copy[idx] < diff { diff = copy[idx+1] - copy[idx] }
        }
        
        for idx in 0..<(copy.count-1) {
            if copy[idx+1] - copy[idx] == diff {
                let pair = [copy[idx], copy[idx+1]]
                result.append(pair)
            }
        }
        
        return result     
    }
}