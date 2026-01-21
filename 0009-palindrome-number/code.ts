function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

  let mod = 1;
  while (mod * 10 <= x) {
    mod *= 10;
  }

  while (mod >= 1) {
    const right = x % 10;
    const left = Math.floor(x / mod);

    if (left !== right) {
      return false;
    }

    x = x % mod;
    x = Math.floor(x / 10);
    mod = Math.floor(mod / 100);
  }

  return true;
}
