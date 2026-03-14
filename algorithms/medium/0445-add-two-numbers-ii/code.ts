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
function reverseList(head: ListNode | null): ListNode | null {
  let current = head;
  let previous = null;
  while (current) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const dummy = new ListNode(0);
  let tail = dummy;

  let p1 = reverseList(l1);
  let p2 = reverseList(l2);

  let carry = 0;
  while (p1 || p2 || carry) {
    const val1 = p1 ? p1.val : 0;
    const val2 = p2 ? p2.val : 0;

    const sum = val1 + val2 + carry;
    const digit = sum % 10;

    carry = Math.floor(sum / 10);

    tail.next = new ListNode(digit);
    tail = tail.next;

    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
  }

  const head = reverseList(dummy.next);
  return head;
}
