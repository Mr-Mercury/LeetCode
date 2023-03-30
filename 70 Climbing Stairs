// This solution is slow compared to others - should check to fix later
var climbStairs = function(n) {
    if(n<2) return 1; 

    let left = 1;
    let mid = 1; 
    let right = 0; 

    for (let i = 2; i <= n; i++) {
        right = left + mid;
        left = mid;
        mid = right; 
    }

    return right;  
};