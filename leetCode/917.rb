def reverse_only_letters(s)
    letters = (("a".."z"). to_a + ("A".."Z").to_a).map {|letter| [letter, letter]}.to_h
    
    startIdx = 0 
    endIdx = s.size - 1 
    
    while startIdx < endIdx
        while !letters.has_key?(s[startIdx]) && startIdx < endIdx
            startIdx += 1
        end
            
        while !letters.has_key?(s[endIdx]) && endIdx > startIdx
            endIdx -= 1
        end
        
        s[startIdx], s[endIdx] = s[endIdx],  s[startIdx]
        
        startIdx += 1
        endIdx -= 1        
    end
    
    return s
end