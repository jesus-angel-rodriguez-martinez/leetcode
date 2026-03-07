function maximumWealth(accounts: number[][]): number {
  let max = -Infinity;

  for (let i = 0; i < accounts.length; i++) {
    let total = 0;

    for (let j = 0; j < accounts[i].length; j++) {
      total += accounts[i][j];
    }

    if (total > max) {
      max = total;
    }
  }

  return max;
}
