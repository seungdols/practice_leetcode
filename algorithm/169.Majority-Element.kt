class Solution {
//     fun majorityElement(nums: IntArray): Int {
//       nums.sort()
//       return nums[nums.size/2]  
//     }
      fun majorityElement(nums: IntArray): Int {
       val hashMap = HashMap<Int, Int>()
       
       for (num in nums) {
         if (!hashMap.containsKey(num)) {
          hashMap.put(num, 1)     
         }
         else {
          val value = hashMap.get(num) ?: 1
          hashMap.put(num, value + 1)     
         }
       }
       
       var majorityElement = hashMap.maxBy { it.value }
       
       return majorityElement?.key ?: 0
    }
}
