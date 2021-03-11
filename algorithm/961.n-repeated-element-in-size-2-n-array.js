/*
 * @lc app=leetcode id=961 lang=javascript
 *
 * [961] N-Repeated Element in Size 2N Array
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
  const result = [...A].fill(0)

  for (const number of A) {
    result[number] = result[number] ? result[number] + 1 : 1
  }

  for (let i = 0; i < result.length; i++) {
    result[i] = result[i] ? result[i] : 0
  }

  return result.map((num) => (num ? num : 0)).indexOf(Math.max(...result))
}
// @lc code=end
