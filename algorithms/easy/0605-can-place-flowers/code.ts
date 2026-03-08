function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  for (let i = 0; i < flowerbed.length && n > 0; i++) {
    const current = flowerbed[i];
    if (current === 1) {
      continue;
    }

    const previous = flowerbed[i - 1] ?? 0;
    const isPreviousEmpty = previous === 0;

    const next = flowerbed[i + 1] ?? 0;
    const isNextEmpty = next === 0;

    if (isPreviousEmpty && isNextEmpty) {
      n--;
      i++;
    }
  }
  return n === 0;
}
