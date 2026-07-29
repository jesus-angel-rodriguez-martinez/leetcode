function mergeAlternately(word1: string, word2: string): string {
  const result = [];

  let ptr1 = 0;
  let ptr2 = 0;

  while (ptr1 < word1.length || ptr2 < word2.length) {
    if (ptr1 < word1.length) {
      result.push(word1[ptr1++]);
    }
    if (ptr2 < word2.length) {
      result.push(word2[ptr2++]);
    }
  }

  return result.join("");
}
