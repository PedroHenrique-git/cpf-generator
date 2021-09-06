import generateCpf from './modules/generateCpf';

(() => {
  const result: HTMLDivElement = document.querySelector('.result');
  const button: HTMLButtonElement = document.querySelector('.generate');

  window.addEventListener('load', () => {
    result.innerText = generateCpf();
  });

  button.addEventListener('click', () => {
    result.innerText = generateCpf();
  });
})();
