const cache = {};

function climbStairs(n: number): number {
  if (n in cache) {
    return cache[n];
  }

  if (n <= 2) {
    return n;
  }

  cache[n] = climbStairs(n - 1) + climbStairs(n - 2);

  return cache[n];
}
