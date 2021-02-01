/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  // 했다가 틀림
  // return (parseInt(a, 2) + parseInt(b, 2)).toString(2)
  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt
  return (BigInt(`0b${a}`, 2) + BigInt(`0b${b}`, 2)).toString(2)
};
// @lc code=end

