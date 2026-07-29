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

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
  const cache = new Set(nums);

  const dummy = new ListNode(0, head);

  let current = head;
  let previous = dummy;

  while (current) {
    if (cache.has(current.val)) {
      previous.next = current.next;
    } else {
      previous = current;
    }
    current = current.next;
  }

  return dummy.next;
}
