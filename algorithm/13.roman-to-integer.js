/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanMap = new Map()
  romanMap.set('I', 1)
  romanMap.set('V', 5)
  romanMap.set('X', 10)
  romanMap.set('L', 50)
  romanMap.set('C', 100)
  romanMap.set('D', 500)
  romanMap.set('M', 1000)
  
  const str = s.split('').reverse()
  
  let result = romanMap.get(s[s.length-1])
  
  for (let i = 0; i < str.length-1; i++) {
      const cur = romanMap.get(str[i])
      const prev = romanMap.get(str[i+1])
      
      if (cur <= prev) {
          result += prev
      } else {
          result -= prev
      }
  }
  
  return result
};
// @lc code=end

