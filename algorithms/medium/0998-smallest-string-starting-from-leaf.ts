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

function smallestFromLeaf(root: TreeNode | null): string {
  let smallest = "";

  const backtrack = (node: TreeNode | null, path: string) => {
    if (!node) {
      return;
    }

    const char = String.fromCharCode(node.val + 97);
    const current = char + path;

    if (!node.left && !node.right) {
      if (!smallest || current < smallest) {
        smallest = current;
      }
    }

    backtrack(node.left, current);
    backtrack(node.right, current);
  };

  backtrack(root, "");
  return smallest;
}
