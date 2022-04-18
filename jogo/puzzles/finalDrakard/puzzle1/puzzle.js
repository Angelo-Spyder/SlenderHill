
var senhas = ["A","I","P","T"];

//Bloco 1
var diminuir01 = document.querySelector("#diminuir-1");
var aumentar01 = document.querySelector("#aumentar-1");
var senhaTexto01 = document.querySelector(".senha-1");

//Bloco 2
var diminuir02 = document.querySelector("#diminuir-2");
var aumentar02 = document.querySelector("#aumentar-2");
var senhaTexto02 = document.querySelector(".senha-2");

//Contador e Comfirmar
var comfirmar = document.querySelector("#comfirmar");
var contador = 0;

//Texto 

senhaTexto01.textContent = senhas[contador];
senhaTexto02.textContent = senhas[1];

//Botões de troca do array do bloco 1

aumentar01.addEventListener("click", function(){
    if(contador < 3){
        contador = contador + 1;
        senhaTexto01.textContent = senhas[contador]
    }else if(contador >= 3 ){
        contador = 0
        senhaTexto01.textContent = senhas[contador]
    }
});

diminuir01.addEventListener("click", function(){
    if(contador > 0){
        contador = contador - 1;
        senhaTexto01.textContent = senhas[contador]
    }else if(contador <= 3 ){
        contador = 3
        senhaTexto01.textContent = senhas[contador]
    }
})

//Botões troca de array bloco 2

aumentar02.addEventListener("click", function(){
    if(contador < 3){
        contador = contador + 1;
        senhaTexto02.textContent = senhas[contador]
    }else if(contador >= 3 ){
        contador = 0
        senhaTexto02.textContent = senhas[contador]
    }
});

diminuir02.addEventListener("click", function(){
    if(contador > 0){
        contador = contador - 1;
        senhaTexto02.textContent = senhas[contador]
    }else if(contador <= 3 ){
        contador = 3
        senhaTexto02.textContent = senhas[contador]
    }
})

comfirmar.addEventListener("click", function(){
    if(senhaTexto01.textContent == "T" && senhaTexto02.textContent == "P"){
        console.log("Passou!!!")
    }
})

