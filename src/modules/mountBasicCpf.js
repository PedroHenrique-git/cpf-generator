const rand = (min,max) =>{
    return Math.floor(Math.random() * (max - min) + min);
}

const GeraArrayCpf = () =>{
    let Arraycpf = [];

    for(let i =0;i<9;i++){
        let num = rand(0,10);
        Arraycpf.push(num);
    }

    return Arraycpf;
}

export default GeraArrayCpf;