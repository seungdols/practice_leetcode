/*
 * @lc app=leetcode id=1464 lang=javascript
 *
 * [1464] Maximum Product of Two Elements in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let maxNum = 0
  for (let i = 0; i < nums.length; i = i + 1) {
      for (let j = i + 1;  j < nums.length; j = j + 1) {
          if (maxNum < ((nums[i]-1) * ((nums[j]-1)))) {
              maxNum = ((nums[i]-1) * ((nums[j]-1)))
          }
      }
  }
  return maxNum
};
// @lc code=end

