function orangesRotting(grid: number[][]): number {
  const rows = grid.length;
  const columns = grid[0].length;

  let freshOranges = 0;
  const rottenQueue: number[][] = [];
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const current = grid[row][column];
      if (current === 1) {
        freshOranges++;
      } else if (current === 2) {
        rottenQueue.push([row, column]);
      }
    }
  }

  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  let minutes = 0;
  while (rottenQueue.length) {
    const length = rottenQueue.length;
    let hasRottenOranges = false;

    for (let position = 0; position < length; position++) {
      const [row, column] = rottenQueue.shift();

      for (const [dRow, dColumn] of directions) {
        const updatedRow = row + dRow;
        const updatedColumn = column + dColumn;

        if (updatedRow < 0 || updatedRow >= rows) {
          continue;
        }
        if (updatedColumn < 0 || updatedColumn >= columns) {
          continue;
        }
        if (grid[updatedRow][updatedColumn] !== 1) {
          continue;
        }

        grid[updatedRow][updatedColumn] = 2;
        freshOranges--;
        rottenQueue.push([updatedRow, updatedColumn]);
        hasRottenOranges = true;
      }
    }

    if (hasRottenOranges) {
      minutes++;
    }
  }
  return freshOranges > 0 ? -1 : minutes;
}
