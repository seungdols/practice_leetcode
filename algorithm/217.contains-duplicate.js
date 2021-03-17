/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const result = []
  
  for (const num of nums) {
    result[num] = result[num] ? result[num] + 1 : 1
  }
  
  let check = false
  for (let i = 0; i < result.length; i++) {
    result[i] = result[i] ? result[i] : 0
    if (result[i] > 1) {
      check = true
      break
    }
  }
  
  return check
};
// @lc code=end

