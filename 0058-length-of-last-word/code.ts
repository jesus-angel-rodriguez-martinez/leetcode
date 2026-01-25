function lengthOfLastWord(s: string): number {
  let length = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const current = s[i];
    if (current === " ") {
      if (length) {
        return length;
      }
    } else {
      length++;
    }
  }
  return length;
}
