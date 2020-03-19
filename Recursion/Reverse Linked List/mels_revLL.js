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
    if(head == null) 
        return null;
    
    let rest = head.next;
    head.next = null;
    
    return reverseListTail(head, rest);
};

var reverseListTail = function(first, second) {
    if(second == null) {
        return first;
    } else {
        let temp = second.next;
        second.next = first;
        return reverseListTail(second, temp);
    }
}