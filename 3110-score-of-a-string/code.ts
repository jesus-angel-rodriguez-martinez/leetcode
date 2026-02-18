function scoreOfString(s: string): number {
  let total = 0;
  for (let i = 1; i < s.length; i++) {
    const current = s.charCodeAt(i);
    const next = s.charCodeAt(i - 1);
    total += Math.abs(current - next);
  }
  return total;
}
