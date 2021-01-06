/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// 把下一个节点的值赋给当前节点，然后把当前节点指针指向下下个节点
var deleteNode = function(node) {
  node.val = node.next.val
  node.next = node.next.next
};