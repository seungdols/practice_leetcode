class Solution {
    fun getConcatenation(nums: IntArray): IntArray {
      val n = nums.size
      
      var j = n 
      
      val concat = IntArray(n * 2)
      for (i in 0..n-1) {
          concat[i] = nums[i]
          
          concat[i+j] = nums[i]
      }
      
      return concat
    }
}
