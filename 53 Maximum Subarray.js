var maxSubArray = function(nums) {
    
    let sumCur = 0;
    let sumMax = -Infinity;

    for (let i = 0; i<nums.length; i++) {
        sumCur += nums[i];

        if (sumCur > sumMax) sumMax = sumCur;

        if (sumCur < 0) sumCur = 0;
    }

    return sumMax;
};