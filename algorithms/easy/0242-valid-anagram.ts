function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const counter = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    counter[s.charCodeAt(i) - 97]++;
    counter[t.charCodeAt(i) - 97]--;
  }

  const result = counter.every((c) => c === 0);
  return result;
}
