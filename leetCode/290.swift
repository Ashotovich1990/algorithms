class Solution {
    func wordPattern(_ pattern: String, _ str: String) -> Bool {
        let stringToArray = str.components(separatedBy: " ")
        let patternToArray = Array(pattern)
        
        if stringToArray.count != patternToArray.count { 
            return false 
        }
        
        var patternToString: [Character: String] = [:]
        var stringToPattern: [String: Character] = [:]
        
        for idx in 0..<patternToArray.count {
            if let patternUsed = patternToString[patternToArray[idx]] {
                if patternToString[patternToArray[idx]] != stringToArray[idx] { return false }    
            } else {
               if let patternIsStillUsed = stringToPattern[stringToArray[idx]] {
                   return false
               } else {
                    patternToString[patternToArray[idx]] = stringToArray[idx]
                    stringToPattern[stringToArray[idx]] = patternToArray[idx]
               }
            }
        }
        
        return true
        
    }
}