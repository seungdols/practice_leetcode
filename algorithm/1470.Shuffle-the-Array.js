/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  let j = n;
  let result = [];
  for (let i = 0; i < nums.length / 2; i = i + 1) {
      result.push(nums[i]);
      result.push(nums[j++]);
  }
  return result;
};