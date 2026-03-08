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

function hasCycle(head: ListNode | null): boolean {
  let faster = head;
  let slower = head;
  while (faster && faster.next) {
    slower = slower.next;
    faster = faster.next.next;
    if (slower === faster) {
      return true;
    }
  }
  return false;
}
