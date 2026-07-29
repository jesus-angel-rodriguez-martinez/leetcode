function numIslands(grid: string[][]): number {
  const rows = grid.length;
  const columns = grid[0].length;

  const calculateIslands = (row: number, column: number) => {
    if (row < 0 || row >= rows) {
      return 0;
    }
    if (column < 0 || column >= columns) {
      return 0;
    }
    if (grid[row][column] === "0") {
      return 0;
    }

    grid[row][column] = "0";

    calculateIslands(row - 1, column);
    calculateIslands(row + 1, column);
    calculateIslands(row, column - 1);
    calculateIslands(row, column + 1);

    return 1;
  };

  let islands = 0;
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      if (grid[row][column] === "1") {
        islands += calculateIslands(row, column);
      }
    }
  }
  return islands;
}
