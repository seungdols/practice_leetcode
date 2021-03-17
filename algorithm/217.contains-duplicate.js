/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  // TODO: 첫번째 
  // const result = []
  
  // for (const num of nums) {
  //   result[num] = result[num] ? result[num] + 1 : 1
  // }
  
  // let check = false
  // for (let i = 0; i < result.length; i++) {
  //   result[i] = result[i] ? result[i] : 0
  //   if (result[i] > 1) {
  //     check = true
  //     break
  //   }
  // }
  
  // return check

  // TODO: 두번째 - loop 하나를 줄임. (쓸데없이 undefined를 지우려고 함.)
  // const result = []
  
  // for (const num of nums) {
  //   result[num] = result[num] ? result[num] + 1 : 1
  //   if (result[num] > 1) return true
  // }
  
  // return false

  //TODO: 세번째 Set 사용 
  const result = new Set()
  
  for (const num of nums) {
     if (result.has(num)) {
         return true
     }
     result.add(num)
  }
  return false
};
// @lc code=end

