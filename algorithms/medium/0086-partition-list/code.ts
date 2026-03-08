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

function partition(head: ListNode | null, x: number): ListNode | null {
  let beforeHead = new ListNode(0);
  let before = beforeHead;

  let afterHead = new ListNode(0);
  let after = afterHead;

  let current = head;
  while (current) {
    const next = current.next;
    current.next = null;
    if (current.val < x) {
      before.next = current;
      before = before.next;
    } else {
      after.next = current;
      after = after.next;
    }
    current = next;
  }

  before.next = afterHead.next;

  return beforeHead.next;
}
