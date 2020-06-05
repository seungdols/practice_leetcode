/*
 * @lc app=leetcode id=1431 lang=javascript
 *
 * [1431] Kids With the Greatest Number of Candies
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  let result = [] 
    
  const maximumCandies = candies.reduce((previus, current) => previus > current ? previus:current)
  for (let i = 0; i < candies.length; i = i + 1) {
    if (candies[i] + extraCandies >= maximumCandies) {
      result.push(true)
    } else {
      result.push(false)
    }
  } 
  return result
};
// @lc code=end

