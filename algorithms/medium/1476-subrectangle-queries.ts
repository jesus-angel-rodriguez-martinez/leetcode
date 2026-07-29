class SubrectangleQueries {
  protected readonly rectangle: number[][];
  protected readonly updates: number[][] = [];

  constructor(rectangle: number[][]) {
    this.rectangle = rectangle;
  }

  updateSubrectangle(
    row1: number,
    col1: number,
    row2: number,
    col2: number,
    newValue: number,
  ): void {
    this.updates.push([row1, col1, row2, col2, newValue]);
  }

  getValue(row: number, col: number): number {
    for (let i = this.updates.length - 1; i >= 0; i--) {
      const [row1, col1, row2, col2, newValue] = this.updates[i];
      if (row >= row1 && row <= row2 && col >= col1 && col <= col2) {
        return newValue;
      }
    }
    return this.rectangle[row][col];
  }
}

/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */
