class Solution {
    fun merge(nums1: IntArray, m: Int, nums2: IntArray, n: Int): Unit {
        
       var tail = m + n - 1 
       var i = m - 1
       var j = n - 1
        
       while(j >= 0) {
          if (i >= 0 && nums1[i] > nums2[j]) { 
            nums1[tail] = nums1[i] 
             i--
           }
           else {
             nums1[tail] = nums2[j]  
             j--
           } 
           tail--
       }  
    }
}
