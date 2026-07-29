/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteMiddle(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  let slow = head;
  let fast = head;
  let previous = null;

  while (fast && fast.next) {
    previous = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  if (!previous) {
    return null;
  }

  previous.next = slow.next;

  return head;
}
