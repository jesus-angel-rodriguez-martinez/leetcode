/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  let rows = board.length;
  let columns = board[0].length;

  const captureRegion = (row: number, column: number): void => {
    if (row < 0 || row >= rows) {
      return;
    }
    if (column < 0 || column >= columns) {
      return;
    }
    if (board[row][column] !== "O") {
      return;
    }

    board[row][column] = "V";

    captureRegion(row + 1, column);
    captureRegion(row - 1, column);
    captureRegion(row, column + 1);
    captureRegion(row, column - 1);
  };

  for (let row = 0; row < rows; row++) {
    captureRegion(row, 0);
    captureRegion(row, columns - 1);
  }

  for (let column = 0; column < columns; column++) {
    captureRegion(0, column);
    captureRegion(rows - 1, column);
  }

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      if (board[row][column] === "O") {
        board[row][column] = "X";
      } else if (board[row][column] === "V") {
        board[row][column] = "O";
      }
    }
  }
}
