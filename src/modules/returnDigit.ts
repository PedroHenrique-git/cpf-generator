export default (sum: number): string => {
  const digit = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  return String(digit);
};
