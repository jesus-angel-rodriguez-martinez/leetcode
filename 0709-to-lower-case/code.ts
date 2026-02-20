function toLowerCase(s: string): string {
  let result = "";

  for (const ch of s) {
    const code = ch.charCodeAt(0);
    result += code >= 65 && code <= 90 ? String.fromCharCode(code + 32) : ch;
  }

  return result;
}
