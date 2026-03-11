function shortestPathBinaryMatrix(grid: number[][]): number {
  const rows = grid.length;
  const columns = grid[0].length;

  if (grid[0][0] === 1 || grid[rows - 1][columns - 1] === 1) {
    return -1;
  }

  const queue: number[][] = [[0, 0]];
  grid[0][0] = 1;

  const directions = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
  ];

  let head = 0;
  let length = 1;
  while (head < queue.length) {
    const size = queue.length - head;

    for (let i = 0; i < size; i++) {
      const [row, column] = queue[head++];

      if (row === rows - 1 && column === columns - 1) {
        return length;
      }

      for (const [dRow, dColumn] of directions) {
        const nRow = row + dRow;
        const nColumn = column + dColumn;

        if (nRow < 0 || nRow >= rows) {
          continue;
        }
        if (nColumn < 0 || nColumn >= columns) {
          continue;
        }
        if (grid[nRow][nColumn] === 1) {
          continue;
        }

        grid[nRow][nColumn] = 1;
        queue.push([nRow, nColumn]);
      }
    }
    length++;
  }

  return -1;
}
