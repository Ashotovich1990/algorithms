class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        word_counter = {}
        letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        word = ''
        
        for letter in paragraph:
            if letter in letters:
                word += letter.lower()
            elif word:
                if word not in banned:
                    if word in word_counter:
                        word_counter[word] += 1
                    else:
                        word_counter[word] = 1
                
                word = ''
                
        if word and word not in banned:
            if word in word_counter:
                word_counter[word] += 1
            else:
                word_counter[word] = 1
            
        return max(word_counter, key=word_counter.get)