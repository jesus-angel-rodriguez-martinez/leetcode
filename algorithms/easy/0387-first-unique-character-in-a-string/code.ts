function firstUniqChar(s: string): number {
  const cache = new Map();
  for (const char of s) {
    cache.set(char, (cache.get(char) || 0) + 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (cache.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
}
