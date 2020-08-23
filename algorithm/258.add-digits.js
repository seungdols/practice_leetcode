/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  let length = 0
  let result = num
  while (length !== 1) {
    const value = result.toString().split('').reduce((pre, cur) => (+pre) + (+cur), 0)
    result = value 
    length = result.toString().length
  }

  return result
};
// @lc code=end

