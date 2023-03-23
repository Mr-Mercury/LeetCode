/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

 // Swap left and right? Is that it? 
var invertTree = function(root) {

    let curNode;
    const queue = [root]; 
    let swapper;

    while (queue.length > 0) {
        curNode = queue.shift();
        if (curNode !== null) {
            if (curNode.left !== null) {
                queue.push(curNode.left);
            }
            if (curNode.right !== null) {
                queue.push(curNode.right);
            }
        swapper = curNode.left;
        curNode.left = curNode.right;
        curNode.right = swapper;
        }
    }

    return root; 
};