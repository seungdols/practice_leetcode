/*
 * @lc app=leetcode id=654 lang=kotlin
 *
 * [654] Maximum Binary Tree
 */

// @lc code=start
/**
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {
  fun constructMaximumBinaryTree(nums: IntArray): TreeNode? {
    return createBinaryTree(nums, 0, nums.size - 1)
  }
  
  fun createBinaryTree(nums: IntArray, left: Int, right: Int): TreeNode? {
    if (left > right) {
    return null
    }
  
    val maxIndex = findMaxIndex(nums, left, right)
    val root = TreeNode(nums[maxIndex])
    root.left = createBinaryTree(nums, left, maxIndex - 1)
    root.right = createBinaryTree(nums, maxIndex + 1, right)
  
    return root
  }

  fun findMaxIndex(nums: IntArray, left: Int, right: Int): Int {
  var max = left
  
  for (i in left+1..right) {
    if (nums[i] > nums[max]) {
      max = i
    }
  }
    return max
  }
}
// @lc code=end

