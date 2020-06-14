/*
 * @lc app=leetcode id=1365 lang=javascript
 *
 * [1365] How Many Numbers Are Smaller Than the Current Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
   const result = [];
   let findValue = 0;
   for (let i = 0 ; i < nums.length; i = i + 1)  {
      for (let j = 0; j < nums.length; j = j + 1) {
        if (nums[i] > nums[j]) {
          findValue = findValue + 1;
        }
      }
      result.push(findValue);
      findValue = 0;
   }
   return result;
};

// @lc code=end

