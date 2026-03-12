type Direction = "up" | "down";

function findDiagonalOrder(mat: number[][]): number[] {
  const result: number[] = [];

  const rows = mat.length;
  let row = 0;

  const columns = mat[0].length;
  let column = 0;

  let direction: Direction = "up";

  for (let i = 0; i < rows * columns; i++) {
    result.push(mat[row][column]);

    if (direction === "up") {
      if (column === columns - 1) {
        row++;
        direction = "down";
      } else if (row === 0) {
        column++;
        direction = "down";
      } else {
        row--;
        column++;
      }
    } else {
      if (row === rows - 1) {
        column++;
        direction = "up";
      } else if (column === 0) {
        row++;
        direction = "up";
      } else {
        row++;
        column--;
      }
    }
  }

  return result;
}
