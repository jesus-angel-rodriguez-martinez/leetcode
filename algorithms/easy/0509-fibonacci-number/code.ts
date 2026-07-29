const cache = new Map();

function fib(n: number): number {
  if (cache.has(n)) {
    return cache.get(n)!;
  }

  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  const result = fib(n - 1) + fib(n - 2);
  cache.set(n, result);

  return result;
}
