/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function findMin(root: TreeNode | null): TreeNode | null {
  let current = root;
  while (current && current.left) {
    current = current.left;
  }
  return current;
}

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) {
    return null;
  }
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    if (!root.left) {
      return root.right;
    }
    if (!root.right) {
      return root.left;
    }
    const min = findMin(root.right);
    root.val = min.val;
    root.right = deleteNode(root.right, min.val);
  }
  return root;
}
