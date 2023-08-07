function toSum (nums, target) {
    let obj = {}; 
    let index = [];
    let difference; 

    for (let i = 0; i < nums.length; i++) {
        difference = target - nums[i];
        
        if (obj[difference]) {
            index.push(obj[difference],i)
        }
        obj[nums[i]] = i
        
    }
    return index;
}

let nums = [2,7,11,15];
let target = 9



var twoSum = function (nums, target) {
    let disct = {};
    for (let i = 0; i < nums.length; i++) {
        let rest = target - nums[i];
        if (disct[rest] || disct[rest] === 0) {
            return [disct[rest], i];
        }
        disct[nums[i]] = i;

    }
};

console.log(twoSum(nums,target))