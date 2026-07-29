function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[] = [];
  const results: number[][] = [];

  const backtrack = (total: number, start: number) => {
    if (total > target) {
      return;
    }
    if (total === target) {
      results.push([...result]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      result.push(candidates[i]);
      backtrack(total + candidates[i], i);
      result.pop();
    }
  };

  backtrack(0, 0);
  return results;
}
