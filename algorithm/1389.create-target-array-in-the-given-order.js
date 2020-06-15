/*
 * @lc app=leetcode id=1389 lang=javascript
 *
 * [1389] Create Target Array in the Given Order
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
  const result = [];
  for (let i = 0; i < nums.length; i = i + 1) {
    result.splice(index[i], 0, nums[i]);
  }
  return result;
};

// @lc code=end

