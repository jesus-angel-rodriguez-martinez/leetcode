# 23. Merge k Sorted Lists

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

## Example 1:

```js
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
```

Explanation: The linked-lists are:

```js
[
  1->4->5,
  1->3->4,
  2->6
]
```

merging them into one sorted linked list:

```js
1->1->2->3->4->4->5->6
```

## Example 2:

```js
Input: lists = []
Output: []
```

## Example 3:

```js
Input: lists = [[]]
Output: []
```

## Constraints:

- k == lists.length
- 0 <= k <= 104
- 0 <= lists[i].length <= 500
- -104 <= lists[i][j] <= 104
- lists[i] is sorted in ascending order.
- The sum of lists[i].length will not exceed 104.