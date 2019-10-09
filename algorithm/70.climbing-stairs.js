/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
   var arr = [];
   return upStairs(0, n, arr);
};
function upStairs(step, n, arr) {
  // time limit
  if (step > n) {
    return 0;
  } 
  if (step == n) {
    return 1;
  }
  if (arr[step] != undefined) {
    return arr[step];
  } 
  var stairs = upStairs(step + 1, n, arr) + upStairs(step + 2, n, arr);
  arr[step] = stairs;
  return stairs;
}
// @lc code=end

