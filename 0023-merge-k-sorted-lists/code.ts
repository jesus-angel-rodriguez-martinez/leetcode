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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let dummy = new ListNode(0);
  let current = dummy;

  while (true) {
    let smallestIndex = -1;

    for (let i = 0; i < lists.length; i++) {
      if (!lists[i]) {
        continue;
      }
      if (smallestIndex === -1 || lists[i].val <= lists[smallestIndex].val) {
        smallestIndex = i;
      }
    }

    if (smallestIndex === -1) {
      break;
    }

    current.next = lists[smallestIndex];
    current = current.next;
    lists[smallestIndex] = lists[smallestIndex].next;
  }

  return dummy.next;
}
