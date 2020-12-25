/*
 * @lc app=leetcode id=1512 lang=javascript
 *
 * [1512] Number of Good Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  // let count = 0;
  // for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //         if (nums[i] === nums[j] && i < j) {
  //             count = count + 1
  //         }
  //     }
  // }
  // return count
  let map = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 0)
    }
    map.set(nums[i], map.get(nums[i]) + 1)
  }

  let count = 0;
  for (const key of map.keys()) {
    if (1 < map.get(key)) {
      const n = map.get(key)
      count += Math.floor((n * (n - 1) / 2))
    }
  }
  return count
};
// @lc code=end