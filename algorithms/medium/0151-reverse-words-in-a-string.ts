function reverseWords(s: string): string {
  let result = [];

  let i = s.length - 1;
  while (i >= 0) {
    while (i >= 0 && s[i] === " ") i--;
    if (i < 0) break;

    let end = i + 1;

    while (i >= 0 && s[i] !== " ") i--;
    let start = i + 1;

    const word = s.substring(start, end);
    result.push(word);
  }

  return result.join(" ");
}
