/*
 * @lc app=leetcode id=1108 lang=javascript
 *
 * [1108] Defanging an IP Address
 */

// @lc code=start
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  return address.replace(/\./gi, "\[\.\]")
};
// @lc code=end

