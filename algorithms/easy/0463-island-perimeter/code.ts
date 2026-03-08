function islandPerimeter(grid: number[][]): number {
  let perimeter = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      if (grid[row][column] === 0) {
        continue;
      }
      const top = grid[row - 1]?.[column] ?? 0;
      const bottom = grid[row + 1]?.[column] ?? 0;
      const left = grid[row]?.[column - 1] ?? 0;
      const right = grid[row]?.[column + 1] ?? 0;

      perimeter += 4 - top - bottom - left - right;
    }
  }
  return perimeter;
}
