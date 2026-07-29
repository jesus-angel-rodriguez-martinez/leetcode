function calPoints(operations: string[]): number {
  const points: number[] = [];

  for (const operation of operations) {
    switch (operation) {
      case "+": {
        const score = points[points.length - 1] + points[points.length - 2];
        points.push(score);
        break;
      }
      case "D": {
        const score = points[points.length - 1] * 2;
        points.push(score);
        break;
      }
      case "C": {
        points.pop();
        break;
      }
      default: {
        const score = Number(operation);
        points.push(score);
        break;
      }
    }
  }

  return points.reduce((previous, current) => previous + current, 0);
}
