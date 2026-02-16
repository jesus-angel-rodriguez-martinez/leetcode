function containsDuplicate(nums: number[]): boolean {
  const cache = new Set();
  for (const num of nums) {
    if (cache.has(num)) {
      return true;
    }
    cache.add(num);
  }
  return false;
}
