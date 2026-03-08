function recoverOrder(order: number[], friends: number[]): number[] {
  const set = new Set(friends);
  const result = order.filter((id) => set.has(id));
  return result;
}
