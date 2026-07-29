function exist(board: string[][], word: string): boolean {
  const rows = board.length;
  const columns = board[0].length;

  const search = (row: number, column: number, position: number): boolean => {
    if (row < 0 || row >= rows) {
      return false;
    }
    if (column < 0 || column >= columns) {
      return false;
    }
    if (board[row][column] !== word[position]) {
      return false;
    }
    if (position === word.length - 1) {
      return true;
    }

    const tmp = board[row][column];
    board[row][column] = "V0N";

    const found =
      search(row + 1, column, position + 1) ||
      search(row - 1, column, position + 1) ||
      search(row, column + 1, position + 1) ||
      search(row, column - 1, position + 1);

    board[row][column] = tmp;

    return found;
  };

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const current = board[row][column];
      if (current === word[0]) {
        const result = search(row, column, 0);
        if (result) {
          return true;
        }
      }
    }
  }

  return false;
}
