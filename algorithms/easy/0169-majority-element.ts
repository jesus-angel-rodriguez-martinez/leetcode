function majorityElement(nums: number[]): number {
  let counter = 0;
  let candidate = 0;

  for (const num of nums) {
    if (counter === 0) {
      candidate = num;
    }
    if (num === candidate) {
      counter++;
    } else {
      counter--;
    }
  }
  return candidate;
}
