function combine(n: number, k: number): number[][] {
  const result: number[] = [];
  const results: number[][] = [];

  const backtrack = (last: number) => {
    if (result.length === k) {
      results.push([...result]);
      return;
    }

    for (let i = last + 1; i <= n; i++) {
      result.push(i);
      backtrack(i);
      result.pop();
    }
  };

  backtrack(0);
  return results;
}
