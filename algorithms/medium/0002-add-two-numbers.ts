/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (    next===undefined ? null : next)
 *     }
 * }
 */
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let carry = 0;

  const dummy = new ListNode(0);
  let tail = dummy;

  let p1 = l1;
  let p2 = l2;

  while (p1 || p2 || carry) {
    let val1 = p1 ? p1.val : 0;
    let val2 = p2 ? p2.val : 0;

    const total = val1 + val2 + carry;
    const digit = total % 10;

    carry = Math.floor(total / 10);

    tail.next = new ListNode(digit);
    tail = tail.next;

    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
  }

  return dummy.next;
}
