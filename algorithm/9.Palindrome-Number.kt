class Solution {
    fun isPalindrome(x: Int): Boolean {
      if (x < 0 || (x % 10 == 0 && x != 0))  return false
       
      var origin = x  
      var reverted = 0
      while(origin > reverted) {
          reverted = reverted * 10 + origin % 10
          origin = origin / 10
      }
      
      return origin == reverted || origin == reverted / 10
    }
}