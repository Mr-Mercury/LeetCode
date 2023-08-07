var searchMatrix = function(matrix, target) {
    let x = matrix[0].length;

    let left = 0;
    let right = (matrix.length * x) - 1;

    while (left <= right) {
        const mid = Math.floor((left/2) + (right/2));
        const value = matrix[Math.floor(mid / x)][mid % x];

        if (value === target) {
            return true;
        } else if (value > target) {
            right = mid - 1;
        } else if (value < target) {
            left = mid + 1;
        }
    }

    return false; 
};