function plusOne(digits: number[]): number[] {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0 && carry; i--) {
    const current = digits[i];
    const total = current + carry;
    digits[i] = total % 10;
    carry = Math.floor(total / 10);
  }
  if (carry) {
    digits.unshift(carry);
  }
  return digits;
}
