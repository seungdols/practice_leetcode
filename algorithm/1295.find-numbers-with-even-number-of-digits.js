/*
 * @lc app=leetcode id=1295 lang=javascript
 *
 * [1295] Find Numbers with Even Number of Digits
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  let count = 0
  for (const num of nums) {
    const digits = getDigits(num)
    if (isEvenNumber(digits.length)) {
      count++
    }
  }
  return count
};
function getDigits(num) {
  const result = []
  let digit = num
  while(digit !== 0) {
    result.push(parseInt(digit % 10))
    digit = parseInt(digit/10)
  }
  return result.reverse()
}

function isEvenNumber (number) {
  return number % 2 === 0
}// @lc code=end

