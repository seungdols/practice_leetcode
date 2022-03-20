class Solution {
  // 문제랑 discuss 풀이랑 이해가 잘 안됨...;;
  
    fun containsNearbyDuplicate(nums: IntArray, k: Int): Boolean {
      // Time Limit Exceeded에 걸려서 discuss 풀이 봄 (이 문제에서 핵심은 i, j라고 문제에 나온다고, for loop를 두개 돌리면 무조건 시간 제약에 걸림)
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
      // hashSet 
//         val n = nums.size - 1
//         val hashSet = HashSet<Int>()
//         for (i in 0..n) {
//             if(i > k) hashSet.remove(nums[i-k-1]) // i-k-1을 생각 해낸게 신기함. 
//             if(!hashSet.add(nums[i])) return true
//         }
//         return false
      // hashmap 
        val n = nums.size - 1
        val map = HashMap<Int, Int>()
        for (i in 0..n) {
            val order = map.put(nums[i], i) // return i value
            
            if (order != null && i - order <= k) return true // i - j <= k에 해당 한다. (order 값이 결국 i값이라) 
            
        }
        
        return false
    }
}
