function isValid(ip: string) {
  const length = ip.length;
  if (length === 0 || length > 3) {
    return false;
  }
  if (ip[0] === "0" && length > 1) {
    return false;
  }
  return Number(ip) <= 255;
}

function restoreIpAddresses(s: string): string[] {
  if (s.length < 4 || s.length > 12) {
    return [];
  }

  const results: string[] = [];
  const result: string[] = [];

  const backtrack = (j: number) => {
    if (result.length === 4) {
      if (j === s.length) {
        results.push(result.join("."));
      }
      return;
    }

    if (j === s.length) {
      return;
    }

    for (let i = 1; i <= 3; i++) {
      if (i + j > s.length) {
        break;
      }

      const segment = s.slice(j, i + j);
      if (!isValid(segment)) {
        continue;
      }

      result.push(segment);
      backtrack(i + j);
      result.pop();
    }
  };

  backtrack(0);
  return results;
}
