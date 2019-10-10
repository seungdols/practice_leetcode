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
  // 왜 ? 빈 값이 들어가지 ?
  var superSet = [];
  function backtrack (nums, start, subset, superSet) {
    superSet.push(subset);
    console.log(subset)
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

