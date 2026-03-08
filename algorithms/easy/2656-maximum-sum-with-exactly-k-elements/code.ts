function maximizeSum(nums: number[], k: number): number {
  const biggest = Math.max(...nums);

  const base = biggest * k;
  const iterations = ((k - 1) * k) / 2;

  const score = base + iterations;
  return score;
}
