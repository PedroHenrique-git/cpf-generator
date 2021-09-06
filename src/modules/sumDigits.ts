/* eslint-disable no-param-reassign */

export default (cpf: string[], acc: number): number => {
  let cont = acc;

  const reducer = cpf.reduce((sum, digit) => {
    const numberDigit = Number(digit);
    sum += numberDigit * cont;
    cont -= 1;
    return sum;
  }, 0);

  return reducer;
};
