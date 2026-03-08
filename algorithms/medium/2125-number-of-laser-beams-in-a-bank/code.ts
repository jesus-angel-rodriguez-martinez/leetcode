function numberOfBeams(bank: string[]): number {
  let total = 0;
  let previous = 0;

  for (let i = 0; i < bank.length; i++) {
    let securityDevices = 0;

    for (let j = 0; j < bank[i].length; j++) {
      if (bank[i][j] === "1") {
        securityDevices++;
      }
    }

    if (securityDevices > 0) {
      total += securityDevices * previous;
      previous = securityDevices;
    }
  }

  return total;
}
