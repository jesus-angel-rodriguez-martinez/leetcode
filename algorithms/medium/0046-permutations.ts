function permute(nums: number[]): number[][] {
  const length = nums.length;

  const result: number[] = [];
  const results: number[][] = [];

  const used: boolean[] = Array.from({ length }, () => false);

  const backtrack = () => {
    if (result.length === nums.length) {
      results.push([...result]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue;
      }

      result.push(nums[i]);
      used[i] = true;

      backtrack();

      result.pop();
      used[i] = false;
    }
  };

  backtrack();
  return results;
}
