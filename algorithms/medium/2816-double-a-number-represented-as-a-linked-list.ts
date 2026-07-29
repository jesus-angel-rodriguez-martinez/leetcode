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
  let current: ListNode | null = head;
  let previous: ListNode | null = null;
  while (current) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
}

function doubleIt(head: ListNode | null): ListNode | null {
  let reversedHead = reverseList(head);
  let current = reversedHead;

  let previous: ListNode | null = null;

  let carry = 0;
  while (current) {
    const total = current.val * 2 + carry;

    current.val = total % 10;

    carry = Math.floor(total / 10);

    previous = current;
    current = current.next;
  }

  if (carry) {
    previous.next = new ListNode(carry);
  }

  return reverseList(reversedHead);
}
