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

function mergeNodes(head: ListNode | null): ListNode | null {
  let write = head;
  let read = head.next;
  let total = 0;

  while (read) {
    if (read.val === 0) {
      write.val = total;
      write.next = read.next;
      write = write.next;
      total = 0;
    } else {
      total += read.val;
    }
    read = read.next;
  }

  return head.val === 0 ? head.next : head;
}
