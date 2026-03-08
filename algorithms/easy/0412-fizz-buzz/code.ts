function fizzBuzz(n: number): string[] {
  const answer = new Array(n);

  for (let i = 1; i <= n; i++) {
    const index = i - 1;

    if (i % 15 === 0) {
      answer[index] = "FizzBuzz";
    } else if (i % 3 === 0) {
      answer[index] = "Fizz";
    } else if (i % 5 === 0) {
      answer[index] = "Buzz";
    } else {
      answer[index] = i.toString();
    }
  }

  return answer;
}
