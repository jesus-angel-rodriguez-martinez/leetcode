function twoSum(nums: number[], target: number): number[] {
  const cache = new Map();
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const complement = target - current;

    if (cache.has(complement)) {
      return [cache.get(complement), i];
    }

    cache.set(current, i);
  }
  return [];
}
