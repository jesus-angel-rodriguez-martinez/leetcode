function minOperations(nums: number[], k: number): number {
  const sum = nums.reduce((previous, current) => previous + current, 0);
  const operations = sum % k;
  return operations;
}
