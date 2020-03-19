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
var reverseList = function(head) {
  let newHead = null;
  while(head != null) {
    newNode = ListNode(head.val);
    newNode.next = newHead;
    newHead = newNode;
    head = head.next;
  }
};
