/*
 * @lc app=leetcode id=442 lang=javascript
 *
 * [442] Find All Duplicates in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  // with extra space   
//  const markArray = [...nums].fill(0)
//  for (const num of nums) {
//    markArray[num] = markArray[num] === 1 ? ++markArray[num]:1
//  }

//  return markArray.reduce((acc, cur, index) => cur > 1 ? [...acc, index]:acc, [])
    
  // without extra space  
  const result = []
  for(const num of nums) {
      const index = Math.abs(num)-1
      if (nums[index] < 0) {
          result.push(Math.abs([num]))
      } else {
        nums[index] = -nums[index]
      }
  }
    
  return result
};
// @lc code=end

