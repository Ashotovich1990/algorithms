class Solution {
    func findRestaurant(_ list1: [String], _ list2: [String]) -> [String] {
        var resultIdxSum = list1.count + list2.count 
        var result: [String] = []
        var seen: [String:Int] = [:]
        
        for idx in 0..<list1.count {
            seen[list1[idx]] = idx
        }
        
        for idx in 0..<list2.count {
            if let found = seen[list2[idx]] {
                if idx + found < resultIdxSum {resultIdxSum = idx + found}
            }
        }
        
        for idx in 0..<list2.count {
            if let found = seen[list2[idx]] {
                if idx + found == resultIdxSum {
                    result.append(list2[idx])
                }
            }
        }
        
        return result
    }
}