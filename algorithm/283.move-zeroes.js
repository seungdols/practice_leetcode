/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

  let countZero = 0; 
  for (const num of nums) {
    countZero = num === 0 ? countZero + 1 : countZero
  }

  const arr = nums.filter(num => num !== 0)

  while (countZero--) {
    arr.push(0)
  }

  for (var i = 0; i < nums.length; i++) {
    nums[i] = arr[i]
  }
   
};
// @lc code=end

