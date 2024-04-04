/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

// The quickest, dirtiest solution is to pull out a max from the array, 
// then just check each kid + extra candies vs max, and if it's equal or
// greater, build the array.  Is there a faster way to do this?  
// The limiting step is certainly finding out the maximum...

var kidsWithCandies1 = function(candies, extraCandies) {
    const baseMax = Math.max(...candies);
    const result = [];

    for (const child of candies) {
        console.log(child)
        if ((child + extraCandies) >= baseMax){
            result.push(true);
        } else {result.push(false)}
    }
    return result;
};

// This method was done with a traditional for loop, which actually seems
// to give a huge performance boost
var kidsWithCandies = function(candies, extraCandies) {
    const baseMax = Math.max(...candies);
    const result = [];

    for (let x = 0; x < candies.length; x++) {
        if ((candies[x] + extraCandies) >= baseMax){
            result.push(true);
        } else {result.push(false)}
    }
    return result;
};


console.log(kidsWithCandies([2,3,5,1,3], 3));
