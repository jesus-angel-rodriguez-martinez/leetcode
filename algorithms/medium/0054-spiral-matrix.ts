function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = [];

  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let left = 0;

  while (top <= bottom && left <= right) {
    for (let column = left; column <= right; column++) {
      result.push(matrix[top][column]);
    }
    top++;
    if (top > bottom) {
      break;
    }

    for (let row = top; row <= bottom; row++) {
      result.push(matrix[row][right]);
    }
    right--;
    if (left > right) {
      break;
    }

    for (let column = right; column >= left; column--) {
      result.push(matrix[bottom][column]);
    }
    bottom--;
    if (top > bottom) {
      break;
    }

    for (let row = bottom; row >= top; row--) {
      result.push(matrix[row][left]);
    }
    left++;
  }

  return result;
}
function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = [];

  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let left = 0;

  while (top <= bottom && left <= right) {
    for (let column = left; column <= right; column++) {
      result.push(matrix[top][column]);
    }
    top++;
    if (top > bottom) {
      break;
    }

    for (let row = top; row <= bottom; row++) {
      result.push(matrix[row][right]);
    }
    right--;
    if (left > right) {
      break;
    }

    for (let column = right; column >= left; column--) {
      result.push(matrix[bottom][column]);
    }
    bottom--;
    if (top > bottom) {
      break;
    }

    for (let row = bottom; row >= top; row--) {
      result.push(matrix[row][left]);
    }
    left++;
  }

  return result;
}
