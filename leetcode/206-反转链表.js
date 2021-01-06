/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 双指针一前一后遍历链表
// 反转双指针
// 反转next的指向

var reverseList = function(head) {
  // 指向整体往后挪一位
  let p1 = head
  let p2 = null
  while(p1) {
    const tmp = p1.next
    p1.next = p2
    p2 = p1
    p1 = tmp
  }
  return p2
};

reverseList([1,2,3,4,5])
