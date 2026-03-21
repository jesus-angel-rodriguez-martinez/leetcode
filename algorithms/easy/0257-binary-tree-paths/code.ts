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

function binaryTreePaths(root: TreeNode | null): string[] {
  const result: number[] = [];
  const results: string[] = [];

  const backtrack = (node: TreeNode | null) => {
    if (!node) {
      return;
    }

    result.push(node.val);

    const isLeaf = !node.left && !node.right;
    if (isLeaf) {
      results.push(result.join("->"));
    } else {
      backtrack(node.left);
      backtrack(node.right);
    }

    result.pop();
  };

  backtrack(root);
  return results;
}
