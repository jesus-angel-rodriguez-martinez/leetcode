function runningSum(nums: number[]): number[] {
  const result = nums.reduce<number[]>((previous, current) => {
    const last = previous.length ? previous[previous.length - 1] : 0;
    previous.push(last + current);
    return previous;
  }, []);
  return result;
}
