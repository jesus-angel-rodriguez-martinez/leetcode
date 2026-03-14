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
function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number,
): ListNode | null {
  const dummy = new ListNode(0, head);

  let previous = dummy;
  let current = dummy.next;

  for (let position = 1; position < left; position++) {
    previous = previous.next;
    current = current.next;
  }

  let reversed = null;

  const tail = current;

  for (let position = left; position <= right; position++) {
    const next = current.next;
    current.next = reversed;
    reversed = current;
    current = next;
  }

  previous.next = reversed;
  tail.next = current;

  return dummy.next;
}
