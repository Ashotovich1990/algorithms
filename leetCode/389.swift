class Solution {
    func findTheDifference(_ s: String, _ t: String) -> Character {
        var letterCount:[Character: Int] = [:]
        
        for letter in t {
            if letterCount[letter] == nil {
                letterCount[letter] = 1
            } else {
                letterCount[letter] = letterCount[letter]! + 1
            }
        }
        
        for letter in s {
            letterCount[letter] = letterCount[letter]! - 1
        }
        
        for (letter,count) in letterCount {
            if count > 0 {return letter}
        }
        
        return "-"
    }
}