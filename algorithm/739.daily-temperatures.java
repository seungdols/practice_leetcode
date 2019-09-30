/*
 * @lc app=leetcode id=739 lang=java
 *
 * [739] Daily Temperatures
 */

// @lc code=start
class Solution {
    public int[] dailyTemperatures(int[] T) {
      List<Integer> arr = new ArrayList<>();
      int days = 1;
        for (int i = 0; i < T.length; i++)  {
          for ( int j = i + 1; j < T.length; j++ ) {
            if (T[i] < T[j]) {
              arr.add(days);
              days = 1;
              break;
            } 
            else {
             days += 1;
            }
          }
          if (arr.size() <= i) {
            arr.add(0);
            days = 1;
          }
        }
     int[] ans = new int[arr.size()];
     int index = 0;
     for (Integer element : arr) {
       ans[index++] = element;
     }
     return ans; 
    }
}
// @lc code=end

