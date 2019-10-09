/*
 * @lc app=leetcode id=70 lang=java
 *
 * [70] Climbing Stairs
 */

// @lc code=start
class Solution {
    public int climbStairs(int n) {
       int[] arr = new int [n + 1];
       return upStairs(0, n, arr);
    }
    public int upStairs(int step, int n, int[] arr) {
      if (step > n) return 0;
      if (step == n) return 1;
      if (arr[step] > 0) return arr[step];
      int stairs = upStairs(step + 1, n, arr) + upStairs(step + 2, n, arr);
      arr[step] = stairs;
      return stairs;
    }
}
// @lc code=end

