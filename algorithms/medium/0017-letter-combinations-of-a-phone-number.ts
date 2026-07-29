const characters = {
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz",
};

function letterCombinations(digits: string): string[] {
  if (!digits) {
    return [];
  }
  const result: string[] = [];

  const backtrack = (position: number, path: string) => {
    if (position === digits.length) {
      result.push(path);
      return;
    }

    const letters = characters[digits[position]];
    for (const char of letters) {
      backtrack(position + 1, path + char);
    }
  };

  backtrack(0, "");
  return result;
}
