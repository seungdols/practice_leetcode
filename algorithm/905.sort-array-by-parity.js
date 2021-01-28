/*
 * @lc app=leetcode id=905 lang=javascript
 *
 * [905] Sort Array By Parity
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  return A.sort((a,b) => (a%2) - (b%2))
  //     let tempElement = 0
  //     let i = 0
  //     let j = A.length-1
      
  //     while(i<j) {
  //         if (A[i] % 2 > A[j] % 2) {
  //             tempElement = A[i]
  //             A[i] = A[j]
  //             A[j] = tempElement
  //         }
  //         if (A[i] % 2 === 0) {
  //             i++
  //         }
  //         if (A[j] % 2 === 1) {
  //             j--
  //         }
  //     }
     
  //     return A
};
// @lc code=end

