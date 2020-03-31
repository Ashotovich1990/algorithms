def reverse_vowels(s)
    vowels = ['a', 'i', 'e', 'o', 'u', 'A', "I", "E", "O", "U" ]
    
    stack = [] 
    indices = []
    
    i = 0 
    while i < s.size 
        if vowels.include?(s[i])
            stack.push(s[i])
            indices.push(i)
        end
        
        i += 1
    end
    
    while stack.size > 0 
        letter = stack.pop 
        idx = indices.shift 
        s[idx] = letter
    end
    
    s
end