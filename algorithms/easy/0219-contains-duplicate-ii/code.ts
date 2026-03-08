function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const cache = new Map();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];

    if (cache.has(current)) {
      const lastSeen = cache.get(current);
      const distance = i - lastSeen;

      if (distance <= k) {
        return true;
      }
    }

    cache.set(current, i);
  }

  return false;
}
