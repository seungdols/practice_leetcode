/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var i = 0;
  for (var j = 0; j < nums.length; j = j + 1) {
      if (nums[j] != val) {
          nums[i] = nums[j];
          i++;
      }
  }
  return i;  
};
// @lc code=end

