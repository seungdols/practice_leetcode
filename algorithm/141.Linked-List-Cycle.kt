/**
 * Example:
 * var li = ListNode(5)
 * var v = li.`val`
 * Definition for singly-linked list.
 * class ListNode(var `val`: Int) {
 *     var next: ListNode? = null
 * }
 */

class Solution {
    fun hasCycle(head: ListNode?): Boolean {
       var first = head
       var second = head
       while(first != null && first.next != null) {  
           first = first?.next?.next
           second = second?.next
           if (first == second) {
               return true
           }
       }
       return false
    }
}
