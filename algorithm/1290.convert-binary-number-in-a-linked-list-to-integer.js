/*
 * @lc app=leetcode id=1290 lang=javascript
 *
 * [1290] Convert Binary Number in a Linked List to Integer
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  // let node = head
  // const arr = []
  // while (node !== null) {
  //   arr.push(node.val)
  //   node = node.next
  // }

  // return parseInt(arr.join(""), 2)

  // Use bit operator
  let node = head
    
  let num = node.val
  while (node.next !== null) {
     num = num << 1 | node.next.val
     node = node.next
  }
  
  return num
}
// @lc code=end
