class Solution {
    func reverseWords(_ s: String) -> String {
        if s.count < 1 { return s }
        
        var res = ""
        let chars = Array(s)
        var stack = [Character]()
        stack.append(chars[0])
        
        var i = 1
        while i < chars.count {
            if chars[i] != " " {
                stack.append(chars[i])
            } else {
                while stack.count > 0 {
                    var letter = stack.removeLast()
                    res += String(letter)
                }
                res += String(chars[i])
            }
            i += 1
        }
        
        while stack.count > 0 {
            var letter = stack.removeLast()
            res += String(letter)
        }
     
        return res
    }
}