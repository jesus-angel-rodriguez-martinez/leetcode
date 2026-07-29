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
function pairSum(head: ListNode | null): number {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let reversed = null;
  while (slow) {
    const next = slow.next;
    slow.next = reversed;
    reversed = slow;
    slow = next;
  }

  let sum = 0;
  let current = head;
  while (reversed) {
    sum = Math.max(sum, reversed.val + current.val);
    current = current.next;
    reversed = reversed.next;
  }

  return sum;
}
