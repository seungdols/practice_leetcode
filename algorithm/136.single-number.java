/*
 * @lc app=leetcode id=136 lang=java
 *
 * [136] Single Number
 */

// @lc code=start
class Solution {
    public int singleNumber(int[] nums) {
      Map<Integer, Integer> hashMap = new HashMap<>();

      for (int number : nums) {
          if (hashMap.containsKey(number)) {
//                       hashMap.put(number, hashMap.get(number) + 1)
              System.out.println("Exist: " + number);
              hashMap.remove(number);
          }
          else {
              System.out.println("put: " + number);
              hashMap.put(number, number);
          }
      }

      Collection<Integer> values = hashMap.values();
      values.forEach(value -> System.out.println("value: " + value));
      Optional<Integer> first = values.stream().findFirst();
      return first.get();
    }
}
// @lc code=end

