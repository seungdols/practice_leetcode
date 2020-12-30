/*
 * @lc app=leetcode id=1299 lang=javascript
 *
 * [1299] Replace Elements with Greatest Element on Right Side
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  let maxValue = 0;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) { 
          if (maxValue < arr[j]) {
              maxValue = arr[j]
          }
      }
      
      if (i < arr.length - 1) {
          result.push(maxValue)    
          maxValue = 0;
      }
      
      
  }
  
  if (result.length < arr.length) {
      result.push(-1)
  }
  return result
};
// @lc code=end

