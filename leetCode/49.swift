class Solution {
    func groupAnagrams(_ strs: [String]) -> [[String]] {
        var stringsWithCharsSorted = strs.map { String($0.sorted())  }
        var seenStrings: [String: [String]] = [:]
        
        for idx in 0..<stringsWithCharsSorted.count {
            if seenStrings[stringsWithCharsSorted[idx]] != nil {
                seenStrings[stringsWithCharsSorted[idx]]!.append(strs[idx])
            } else {
                seenStrings[stringsWithCharsSorted[idx]] = [strs[idx]]
            }
        }
        
        
        
        return seenStrings.map { (key: String, value: [String]) in return value }
    }
}