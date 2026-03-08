const parentheses: Record<string, string> = {
  "(": ")",
  "[": "]",
  "{": "}",
};

function isValid(s: string): boolean {
  const stack: string[] = [];

  for (const char of s) {
    if (char in parentheses) {
      stack.push(parentheses[char]);
      continue;
    }
    if (char !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
}
