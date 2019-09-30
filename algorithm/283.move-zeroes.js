/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
   
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1;  j < nums.length; j++) {
      if (nums[i] === 0) {
        var temp = nums[j]
        nums[j] = nums[i]
        nums[i] = temp
      }
    }
  }
};
// @lc code=end

