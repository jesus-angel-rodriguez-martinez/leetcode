function isAlphanumeric(charCode: number): boolean {
  if (charCode >= 48 && charCode <= 57) {
    return true;
  }
  if (charCode >= 65 && charCode <= 90) {
    return true;
  }
  if (charCode >= 97 && charCode <= 122) {
    return true;
  }
  return false;
}

function isPalindrome(s: string): boolean {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    let left = s.charCodeAt(i);
    let right = s.charCodeAt(j);

    if (!isAlphanumeric(left)) {
      i++;
      continue;
    }
    if (!isAlphanumeric(right)) {
      j--;
      continue;
    }

    if (left >= 65 && left <= 90) {
      left += 32;
    }
    if (right >= 65 && right <= 90) {
      right += 32;
    }

    if (left !== right) {
      return false;
    }

    i++;
    j--;
  }

  return true;
}
