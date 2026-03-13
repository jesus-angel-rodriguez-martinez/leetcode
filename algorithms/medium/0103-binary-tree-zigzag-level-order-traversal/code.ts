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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const queue: TreeNode[] = [];
  const levels: number[][] = [];

  if (root) {
    queue.push(root);
  }

  let isLeftToRight = true;
  while (queue.length) {
    const level: number[] = [];

    let length = queue.length;
    for (let position = 0; position < length; position++) {
      const node = queue.shift();

      level.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    if (!isLeftToRight) {
      level.reverse();
    }

    levels.push(level);

    isLeftToRight = !isLeftToRight;
  }

  return levels;
}
