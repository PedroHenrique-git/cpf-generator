const soma = (array,contador) =>{
    
    const valor = array.reduce((ac ,val) =>{
        ac += (Number(val) *  Number(contador));
        contador--;
        return ac; 
    },0)

    return valor;
} 

const RetornaDigito = (valor) =>{
    return (11 - (valor % 11)) > 9 ? 0 : (11 - (valor % 11));
}

export {soma,RetornaDigito};