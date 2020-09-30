/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i = i + 1) {
    for (let j = i + 1; j < nums.length; j = j + 1) {
      if (nums[i] === nums[j]) {
        nums.splice(j, 1)
        j--
      } 
    }
  }
  return nums.length
};
// @lc code=end

