function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const current = nums[mid];
    if (target > current) {
      left = mid + 1;
    } else if (target < current) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return left;
}
