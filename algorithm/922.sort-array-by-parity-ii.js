/*
 * @lc app=leetcode id=922 lang=javascript
 *
 * [922] Sort Array By Parity II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  let odd = [] 
  let even = []
  for (let i = 0; i < A.length; i = i + 1) {
    if (A[i] % 2 === 0) {
      even.push(A[i])
    } else {
      odd.push(A[i])
    }
  }

  let result = []
  for (let i = 0; i < A.length / 2; i = i + 1) {
    result.push(even[i])
    result.push(odd[i])
  }
  return result
};
// @lc code=end

