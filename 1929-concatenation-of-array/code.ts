/* My solution is much better than the double spread operator. */
function getConcatenation(nums: number[]): number[] {
  const length = nums.length;
  const result = Array(length * 2);

  for (let i = 0; i < length; i++) {
    const current = nums[i];
    result[i] = current;
    result[i + length] = current;
  }

  return result;
}
