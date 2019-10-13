/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  var superSet = [];
  function backtrack (nums, start, subset, superSet) {
    superSet.push([...subset]);
    for (var i = start; i < nums.length; i++) {
      subset.push(nums[i]);
      backtrack(nums, i + 1, subset, superSet);
      subset.pop();
    }
  }
  backtrack(nums, 0, [], superSet);
  return superSet;

}

// @lc code=end

