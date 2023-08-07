var isBalanced = function(root) {
    // Perform a depth first search
    // At the base, return if the right side is true and the left side is true
    // Package data in an array?  
    function dfs(node) {
        if (node === null) return [True, 0];

        const left = dfs(node.left);
        const right = dfs(node.right);

        balance = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;

        return [balance, 1 + Math.max(left[1], right[1])];
    }

    return dfs(root)[0];
}