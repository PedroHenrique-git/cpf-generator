import { cpfIsValid } from 'cpf-is-valid';
import generateCpfNumbers from './generateCpfNumbers';
import sumDigits from './sumDigits';
import returnDigit from './returnDigit';

export default function generateCpf(): string {
  const cpfNumbers: string[] = [];

  for (let i = 0; i < 9; i += 1) {
    const number = generateCpfNumbers(0, 9);
    cpfNumbers.push(String(number));
  }

  const sum1 = sumDigits(cpfNumbers, 10);
  const digit1 = returnDigit(sum1);
  cpfNumbers.push(digit1);

  const sum2 = sumDigits(cpfNumbers, 11);
  const digit2 = returnDigit(sum2);
  cpfNumbers.push(digit2);

  const finalCpf = cpfNumbers
    .join('')
    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');

  return cpfIsValid(finalCpf) ? finalCpf : cpfNumbers.fill('').join('');
}
