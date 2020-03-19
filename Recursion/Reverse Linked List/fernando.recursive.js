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
  let newHead = recursiveList(head, null);
  return newHead;
};

function recursiveList(head, newHead) {
  if (head != null) {
    let newNode = new ListNode(head.val);
    newNode.next = newHead;
    return recursiveList(head.next, newNode);   
  } 
  return newHead;
}
