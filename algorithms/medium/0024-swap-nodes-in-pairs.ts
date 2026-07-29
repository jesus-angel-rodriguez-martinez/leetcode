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

function swapPairs(head: ListNode | null): ListNode | null {
  let dummy: ListNode = new ListNode(0, head);
  let previous: ListNode | null = dummy;

  while (previous.next && previous.next.next) {
    const first = previous.next;
    const second = first.next;

    first.next = second.next;
    second.next = first;
    previous.next = second;

    previous = first;
  }

  return dummy.next;
}
