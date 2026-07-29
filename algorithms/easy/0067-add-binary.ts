function addBinary(a: string, b: string): string {
  let aPtr = a.length - 1;
  let bPtr = b.length - 1;

  let carry = 0;

  const result = [];
  while (aPtr >= 0 || bPtr >= 0 || carry) {
    const currentA = Number(a[aPtr] ?? 0);
    const currentB = Number(b[bPtr] ?? 0);
    const total = currentA + currentB + carry;

    result.push(total % 2);

    carry = Math.floor(total / 2);

    aPtr--;
    bPtr--;
  }

  return result.reverse().join("");
}
