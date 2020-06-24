/*
 * @lc app=leetcode id=700 lang=javascript
 *
 * [700] Search in a Binary Search Tree
 */

// @lc code=start
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  // root.value > value -> left, root.value < value -> right 
  if (!root) { return null }
  if (root.val === val) {
      return root;
  }
  if (root.val > val) {
      return searchBST(root.left, val);
  }
  if (root.val < val) {
      return searchBST(root.right, val);
  }
};
// @lc code=end

