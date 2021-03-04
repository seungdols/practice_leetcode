/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  for (const num of nums) {
    index = Math.abs(num) - 1
    nums[index] = nums[index] > 0 ? -nums[index]:nums[index]
  }
 
  return nums.reduce((acc, cur, index) => cur > 0 ? [...acc, ++index]:acc, [])
};
// @lc code=end

