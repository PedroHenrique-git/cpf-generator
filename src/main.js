import './assets/css/style.css';
import mountBasic from './modules/mountBasicCpf';
import cpf from './modules/cpfGenerator';

(function(){

    let btnGerar = document.querySelector('button');
    let p = document.querySelector('p');
    
    btnGerar.addEventListener('click',function(){
        p.innerHTML = cpf();    
    })
    
})();