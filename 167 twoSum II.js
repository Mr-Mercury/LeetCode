var twoSumSorted = function(numbers, target) {
    let left = 0;
    let right = numbers.length-1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];
        
        if (sum === target) {
            return [left+1, right+1];
        }
        if (sum < target) {
            left++
        } else {right--}
    }
    return "No sum found";
}
const numbers = [2,7,11,15];
const target = 9;

console.log(twoSumSorted(numbers, target));
