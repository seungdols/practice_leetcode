/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let i = 0
  let j = nums.length - 1
  while (i <= j) {
      let position = parseInt((i + j)/2)
      if (nums[position] === target) return position
      else if (nums[position] < target) i = position + 1
      else j = position - 1
  }
  return i
};
// @lc code=end

