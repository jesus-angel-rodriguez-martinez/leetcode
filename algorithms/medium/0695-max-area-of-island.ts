function maxAreaOfIsland(grid: number[][]): number {
  const rows = grid.length;
  const columns = grid[0].length;

  const calculateArea = (row: number, column: number): number => {
    if (column < 0 || column >= columns) {
      return 0;
    }
    if (row < 0 || row >= rows) {
      return 0;
    }
    if (grid[row][column] === 0) {
      return 0;
    }

    grid[row][column] = 0;

    return (
      1 +
      calculateArea(row - 1, column) +
      calculateArea(row + 1, column) +
      calculateArea(row, column - 1) +
      calculateArea(row, column + 1)
    );
  };

  let maxArea = 0;
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      if (grid[row][column] === 1) {
        maxArea = Math.max(maxArea, calculateArea(row, column));
      }
    }
  }
  return maxArea;
}
