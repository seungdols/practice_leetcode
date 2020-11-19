/*
 * @lc app=leetcode id=709 lang=javascript
 *
 * [709] To Lower Case
 */

// @lc code=start
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  return str.split('').map(char => (char >= 'A' && char <= 'Z') ? String.fromCharCode(char.charCodeAt(0) + 32) : char).join('')
};
// @lc code=end

