function mySqrt(x: number): number {
  let left = 1;
  let right = x;
  let answer = 0;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const square = middle * middle;

    if (square === x) {
      return middle;
    }

    if (square < x) {
      answer = middle;
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return answer;
}
