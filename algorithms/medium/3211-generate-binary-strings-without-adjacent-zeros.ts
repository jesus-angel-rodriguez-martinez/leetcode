function validStrings(n: number): string[] {
  const result: string[] = [];
  const results: string[] = [];

  const backtrack = () => {
    if (result.length === n) {
      results.push(result.join(""));
      return;
    }

    result.push("1");
    backtrack();
    result.pop();

    if (result.length === 0 || result[result.length - 1] !== "0") {
      result.push("0");
      backtrack();
      result.pop();
    }
  };

  backtrack();
  return results;
}
