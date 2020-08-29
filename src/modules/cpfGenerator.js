import GeraArrayCpf from './mountBasicCpf';
import {soma,RetornaDigito} from './verifyingDigits';

function geraCpf(){

    let ArrayCpf = GeraArrayCpf();

    let contador = ArrayCpf.length + 1;
    let total = soma(ArrayCpf ,contador);
    let digito = RetornaDigito(total);

    ArrayCpf.push(digito);

    contador = ArrayCpf.length + 1;
    total = soma(ArrayCpf ,contador);
    digito = RetornaDigito(total);

    ArrayCpf.push(digito);

    const cpfFormatado = ArrayCpf 
    .join('')
    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
    
    return cpfFormatado;
}

export default geraCpf;
