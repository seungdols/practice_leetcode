/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let result = n
  let memo = []
    while (result !== 1) {
      memo.push(result)
      const value = result.toString().split('')
                    .map(v => Math.pow(+v, 2))
                    .reduce((pre, cur) => (pre + cur), 0)
      result = value
      if (memo.includes(result)) {
        return false
      }
    }
  return true
};
// @lc code=end

