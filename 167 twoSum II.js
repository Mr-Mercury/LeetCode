var twoSum = function(numbers, target) {
    // Create an object
    // Check if target - current is in obj, if no, add
    // if yes, break from loop.  Return first index and last index

    const cache = {};
    let first = 0;
    let second = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (cache[target-numbers[i]]) { 
            first = cache[target-numbers[i]] + 1;
        } else {cache[target-numbers[i]] = i;}
    }

    console.log(cache);
    return [first,second]
};

const numbers = [2,7,11,15];
const target = 9;

console.log(twoSum(numbers, target));
