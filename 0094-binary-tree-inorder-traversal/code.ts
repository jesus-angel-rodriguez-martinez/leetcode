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

function iterativeInorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }
  const values: number[] = [];

  const stack: TreeNode[] = [];

  let current = root;

  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    values.push(current.val);

    current = current.right;
  }

  return values;
}

function recursiveInorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }
  const values: number[] = [];

  const dfs = (node: TreeNode): null => {
    if (!node) {
      return;
    }
    dfs(node.left);
    values.push(node.val);
    dfs(node.right);
  };

  dfs(root);
  return values;
}
