function removeDuplicates(nums: number[]): number {
  let k = 0;
  for (let i = 1; i < nums.length; i++) {
    const current = nums[i];
    const last = nums[k];
    if (current !== last) {
      k++;
      nums[k] = current;
    }
  }
  return k + 1;
}
