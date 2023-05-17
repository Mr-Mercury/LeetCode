var lowestCommonAncestor = function(root, p, q) {
    // Traversing an array: 2*i + 1 = left, 2*i + 2 = right
    if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    }

    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    }

    return root
};