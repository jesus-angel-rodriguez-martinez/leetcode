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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next || !k) {
    return head;
  }

  let length = 0;
  let current = head;
  while (current) {
    current = current.next;
    length++;
  }

  k = k % length;
  if (!k) {
    return head;
  }

  const dummy = new ListNode(0, head);

  let fast = head;
  let slow = head;

  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  const next = dummy.next;
  dummy.next = slow.next;
  slow.next = null;
  fast.next = next;

  return dummy.next;
}
