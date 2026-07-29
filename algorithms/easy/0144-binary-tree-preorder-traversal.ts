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
function recursivePreorderTraversal(root: TreeNode | null): number[] {
  const values: number[] = [];

  const dfs = (node: TreeNode): void => {
    if (!node) {
      return;
    }
    values.push(node.val);
    dfs(node.left);
    dfs(node.right);
  };

  dfs(root);
  return values;
}

function iterativePreorderTraversal(root: TreeNode | null): number[] {
  const values: number[] = [];

  if (!root) {
    return values;
  }

  const stack: TreeNode[] = [root];

  while (stack.length > 0) {
    const node = stack.pop()!;
    values.push(node.val);

    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }

  return values;
}
