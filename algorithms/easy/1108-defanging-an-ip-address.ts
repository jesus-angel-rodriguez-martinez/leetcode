function defangIPaddr(address: string): string {
  const result = address.replaceAll(".", "[.]");
  return result;
}
