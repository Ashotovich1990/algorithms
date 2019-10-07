class Solution {
    func maxNumberOfBalloons(_ text: String) -> Int {
        var lettersNeeded:[Character: Int] = ["b": 0, "a": 0, "l": 0, "o": 0, "n" : 0]
        
        for char in text {
            if lettersNeeded[char] != nil {
               lettersNeeded[char]! += 1
            }
        }
        
        var singleLetterCount = min(lettersNeeded["b"]!, lettersNeeded["a"]!, lettersNeeded["n"]!)
        var doubleLetterCount = min(lettersNeeded["o"]!, lettersNeeded["l"]!)
       
        if singleLetterCount == 0 || doubleLetterCount == 0 {
            return 0
        } else {
            return doubleLetterCount/2 < singleLetterCount ? doubleLetterCount/2 : singleLetterCount
        }
    }
}