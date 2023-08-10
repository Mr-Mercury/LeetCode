impl Solution {
    pub fn max_sub_array(nums: Vec<i32>) -> i32 {
        
        let mut sumCur: i32 = 0;
        let mut sumMax: i32 = i32::MIN;

        for i in 0..nums.len() {
            sumCur += nums[i];
            
            if sumCur > sumMax {
               sumMax = sumCur;
            }

            if sumCur < 0 {
                sumCur = 0;
            }
        }
        sumMax
    }
}