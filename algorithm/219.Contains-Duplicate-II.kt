class Solution {
  // 문제랑 discuss 풀이랑 이해가 잘 안됨...;;
  
    fun containsNearbyDuplicate(nums: IntArray, k: Int): Boolean {
      // Time Limit Exceeded에 걸려서 discuss 풀이 봄 
//         val n = nums.size - 1
//         for (i in 0..n) {
//             for (j in i+1..n) {
                
        
//             if (nums[i] == nums[j] && Math.abs(i - j) <= k) {
//                 println("${i}, ${j}")
//                 return true
//              } 
//             }
//         }
//         return false
        val n = nums.size - 1
        val hashSet = HashSet<Int>()
        for (i in 0..n) {
            if(i > k) hashSet.remove(nums[i-k-1])
            if(!hashSet.add(nums[i])) return true
        }
        return false
    }
}
