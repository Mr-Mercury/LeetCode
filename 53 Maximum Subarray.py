class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        sumMax = float('-inf')
        sumCur = 0

        for num in nums:
            sumCur += num
            
            if sumCur > sumMax:
                sumMax = sumCur
            
            if sumCur < 0:
                sumCur = 0
        
        return sumMax