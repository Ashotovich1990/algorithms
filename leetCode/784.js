var letterCasePermutation = function(s) {
    if (!s.length) return [];
    
    let digits = ['0','1','2','3', '4', '5', '6', '7', '8', '9']
    let nextLetters
    
    let result = !digits.includes(s[0]) ? [s[0].toLowerCase(), s[0].toUpperCase()] : [s[0]]
    
    for (let i = 1; i < s.length; i++) {
         nextLetters = !digits.includes(s[i]) ? [s[i].toLowerCase(), s[i].toUpperCase()] : [s[i]]
         let resultUpdated = []
         while (nextLetters.length > 0) {
             let nextLetter = nextLetters.shift()
             for (let j = 0; j < result.length; j++) {
                 let newString = result[j] + nextLetter
                 resultUpdated.push(newString)
             }
         }
        result = resultUpdated
    }
    
    return result
};