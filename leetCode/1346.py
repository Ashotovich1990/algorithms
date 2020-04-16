class Solution:
    def checkIfExist(self, arr: List[int]) -> bool:
        halved = set()
        zero = 0
        
        for num in arr:
            if num:
                halved.add(num/2)
            else:
                zero += 1
        
        for num in arr:
            if num in halved:
                return True
        
        return zero > 1