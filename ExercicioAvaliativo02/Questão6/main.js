
function fatorial(){ 
    let numero = parseInt(document.getElementById('numero').value);
    let resposta = document.getElementById('resposta');
    let result = 1;
  
    for(var count=1 ; count<=numero ; count++){
        result *= count;
    }
    resposta.innerHTML = result;
  }
  