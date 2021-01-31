/*
 * @lc app=leetcode id=1313 lang=javascript
 *
 * [1313] Decompress Run-Length Encoded List
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
  let result = []
    
  for (let i = 0; i <= nums.length-2; i = i + 2) {
      let freq = nums[i]
      let val = nums[i+1]
      // for (let j = 0; j < freq; j++) {
      //     result.push(val)
      // }
      result.push(...Array(freq).fill(val)
  }
  return result
};
// @lc code=end

