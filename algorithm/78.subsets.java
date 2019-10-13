import java.util.ArrayList;
import java.util.List;

/*
 * @lc app=leetcode id=78 lang=java
 *
 * [78] Subsets
 */

// @lc code=start
class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> powerset = new ArrayList<>();
        loop(nums, powerset, new ArrayList<>(), 0);
        return powerset;
    }
    public void loop(int[] nums, List<List<Integer>> powerset, List<Integer> sub, int start) {
      powerset.add(new ArrayList<>(sub));
      for (int i = start; i < nums.length; i++) {
        sub.add(nums[i]);
        loop(nums, powerset, sub, i + 1);
        sub.remove(sub.size() - 1 );
      }
    }
}
// @lc code=end

