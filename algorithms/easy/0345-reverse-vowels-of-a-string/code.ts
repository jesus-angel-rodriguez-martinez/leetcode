const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

const isVowel = (char: string): boolean => vowels.has(char);

function reverseVowels(s: string): string {
  const reversed = s.split("");

  let left = 0;
  let right = reversed.length - 1;

  while (left < right) {
    while (left < right && !isVowel(reversed[left])) {
      left++;
    }
    while (left < right && !isVowel(reversed[right])) {
      right--;
    }
    [reversed[left], reversed[right]] = [reversed[right], reversed[left]];
    left++;
    right--;
  }

  return reversed.join("");
}
