const numerals: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const current = numerals[s[i]];
    const next = numerals[s[i + 1]];
    if (current < next) {
      result = result - current;
    } else {
      result = result + current;
    }
  }
  return result;
}
