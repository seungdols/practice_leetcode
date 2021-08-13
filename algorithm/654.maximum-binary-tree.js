/*
 * @lc app=leetcode id=654 lang=javascript
 *
 * [654] Maximum Binary Tree
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  return createMaximumBinaryTree(nums, 0, nums.length - 1)
};

function createMaximumBinaryTree(nums, left, right) {
  if (left > right) {
    return null
  }

  const maxIndex = findMaxIndex(nums, left, right)
  const root = new TreeNode(nums[maxIndex],
    createMaximumBinaryTree(nums, left, maxIndex - 1),
    createMaximumBinaryTree(nums, maxIndex + 1, right))

  return root
}

function findMaxIndex(list, left, right) {
  let max = left

  for (let i = left + 1; i <= right; i++) {
    if (list[i] > list[max]) {
      max = i
    }
  }

  return max
}
// @lc code=end