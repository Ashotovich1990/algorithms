class Solution {
    func commonChars(_ A: [String]) -> [String] {
        var result: [String] = []
        if A.count < 1 { return [] }
        var shortestWordLetters = Array(findShortestWord(words: A))
       
        for word in A {
            var wordLetters = Array(word)
            var shortestWordUpdated: [Character] = []
            for i in 0..<(shortestWordLetters.count) {
                if let idx = wordLetters.firstIndex(of: shortestWordLetters[i]) {
                    shortestWordUpdated.append(shortestWordLetters[i])
                    wordLetters.remove(at: idx)
                }
            }
            shortestWordLetters = shortestWordUpdated
        }

        return shortestWordLetters.map {String($0)}
    }
    
    func findShortestWord(words: [String]) -> String {
        var result = words[0]
        for word in words {
            if word.count > result.count { result = word}
        }
        return result
    }
}