function generateMatrix(n: number): number[][] {
  const result = Array.from({ length: n }, () => new Array(n).fill(0));

  let top = 0;
  let right = n - 1;
  let bottom = n - 1;
  let left = 0;

  let counter = 1;
  while (top <= bottom && left <= right) {
    for (let column = left; column <= right; column++) {
      result[top][column] = counter++;
    }
    top++;
    if (top > bottom) {
      break;
    }

    for (let row = top; row <= bottom; row++) {
      result[row][right] = counter++;
    }
    right--;
    if (left > right) {
      break;
    }

    for (let column = right; column >= left; column--) {
      result[bottom][column] = counter++;
    }
    bottom--;
    if (top > bottom) {
      break;
    }

    for (let row = bottom; row >= top; row--) {
      result[row][left] = counter++;
    }
    left++;
  }

  return result;
}
