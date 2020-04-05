class Solution(object):
    def pivotIndex(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        length = len(nums)
        
        if length < 3:
            return -1
        
        sum_from_right = [0]
        
        i = length-1 
        
        while i >= 0:
            next_sum = nums[i] + sum_from_right[0]
            sum_from_right = [next_sum] + sum_from_right
            i -= 1
            
        i = 0 
        sum = 0
        
        while i < length:
            if sum == sum_from_right[i+1]:
                return i
            else:
                sum += nums[i]
                i += 1
            
        return -1