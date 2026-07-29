function removeElement(nums: number[], val: number): number {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (current !== val) {
      nums[k] = current;
      k++;
    }
  }
  return k;
}
