/*
 * @lc app=leetcode id=1351 lang=javascript
 *
 * [1351] Count Negative Numbers in a Sorted Matrix
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  let negatives = 0
  for (let i = 0; i < grid.length; i = i + 1) {
    negatives = negatives + count(grid[i]);
  }
  return negatives;
};

const count = (arr) => {
  let negative = 0
  for (let i = 0; i < arr.length; i = i + 1) {
    if (arr[i] < 0) {
      negative = negative + 1
    }
  }
  return negative
}
// @lc code=end

