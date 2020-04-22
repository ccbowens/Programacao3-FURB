var n1 = document.getElementById ("numero1");
var n2 = document.getElementById ("numero2");
var n3 = document.getElementById ("numero3");


function calcula(){
    let soma = n1.value + n2.value + n3.value;
    
    if(soma % 2 == 0){
        alert("O número é par");
    }else{
        alert("O número é impar");
    }
    
}