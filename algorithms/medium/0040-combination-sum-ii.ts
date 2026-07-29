function combinationSum2(candidates: number[], target: number): number[][] {
  const result: number[] = [];
  const results: number[][] = [];

  candidates.sort((a, b) => a - b);

  const backtrack = (last: number, remaining: number) => {
    if (remaining === 0) {
      results.push([...result]);
      return;
    }

    for (let i = last; i < candidates.length; i++) {
      if (i > last && candidates[i] === candidates[i - 1]) {
        continue;
      }

      const current = candidates[i];

      if (current > remaining) {
        break;
      }

      result.push(current);
      backtrack(i + 1, remaining - current);
      result.pop();
    }
  };

  backtrack(0, target);
  return results;
}
