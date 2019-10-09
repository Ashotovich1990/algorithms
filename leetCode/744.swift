class Solution {
    func nextGreatestLetter(_ letters: [Character], _ target: Character) -> Character {
        var start = 0
        var end = letters.count - 1
        
        while start <= end {
            if start == end || letters[start] == letters[end] {
                if letters[end].asciiValue! > target.asciiValue! {
                    return letters[end]
                } else {
                    return letters[(end + 1) % letters.count]
                }
            }
            
            var mid = start + (end - start)/2
            
            if letters[mid].asciiValue! < target.asciiValue! {
                start = mid + 1
            } else if letters[mid].asciiValue! > target.asciiValue! {
                end = mid - 1
            } else {
                if letters[mid] != letters[mid+1] { return letters[mid+1] }
                start = mid + 1
            }
        }
        
        return "-"   
    }
}