function numJewelsInStones(jewels: string, stones: string): number {
  const cache = new Set(jewels);

  let total = 0;

  for (const stone of stones) {
    if (cache.has(stone)) {
      total++;
    }
  }

  return total;
}
