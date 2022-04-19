
//Audio e Senha
var senhas = ["A","I","P","T"];
var iron = document.querySelector(".iron");
var papel = document.querySelector(".paper-slide");

//Bloco 1
var diminuir01 = document.querySelector("#diminuir-1");
var aumentar01 = document.querySelector("#aumentar-1");
var senhaTexto01 = document.querySelector("#senha-1");

//Bloco 2
var diminuir02 = document.querySelector("#diminuir-2");
var aumentar02 = document.querySelector("#aumentar-2");
var senhaTexto02 = document.querySelector("#senha-2");

//Bloco 3
var diminuir03 = document.querySelector("#diminuir-3");
var aumentar03 = document.querySelector("#aumentar-3");
var senhaTexto03 = document.querySelector("#senha-3");

//Contador e Comfirmar
var comfirmar = document.querySelector("#comfirmar");
var contador = 0;

//Texto 

senhaTexto01.textContent = senhas[contador];
senhaTexto02.textContent = senhas[1];
senhaTexto03.textContent = senhas[2];
//Botões de troca do array do bloco 1

aumentar01.addEventListener("click", function(){
    if(contador < 3){
        contador = contador + 1;
        senhaTexto01.textContent = senhas[contador];
        papel.play();
    }else if(contador >= 3 ){
        contador = 0;
        senhaTexto01.textContent = senhas[contador];
        papel.play();
    };
});

diminuir01.addEventListener("click", function(){
    if(contador > 0){
        contador = contador - 1;
        senhaTexto01.textContent = senhas[contador];
        papel.play();
    }else if(contador <= 3 ){
        contador = 3;
        senhaTexto01.textContent = senhas[contador];
        papel.play();
    }
})

//Botões troca de array bloco 2

aumentar02.addEventListener("click", function(){
    if(contador < 3){
        contador = contador + 1;
        senhaTexto02.textContent = senhas[contador];
        papel.play();
    }else if(contador >= 3 ){
        contador = 0;
        senhaTexto02.textContent = senhas[contador];
        papel.play();
    }
});

diminuir02.addEventListener("click", function(){
    if(contador > 0){
        contador = contador - 1;
        senhaTexto02.textContent = senhas[contador];
        papel.play();
    }else if(contador <= 3 ){
        contador = 3;
        senhaTexto02.textContent = senhas[contador];
        papel.play();
    }
})

//Botões trocas de array 3
aumentar03.addEventListener("click", function(){
    if(contador < 3){
        contador = contador + 1;
        senhaTexto03.textContent = senhas[contador];
        papel.play();
    }else if(contador >= 3 ){
        contador = 0;
        senhaTexto03.textContent = senhas[contador];
        papel.play();
    }
});

diminuir03.addEventListener("click", function(){
    if(contador > 0){
        contador = contador - 1;
        senhaTexto03.textContent = senhas[contador];
        papel.play();
    }else if(contador <= 3 ){
        contador = 3;
        senhaTexto03.textContent = senhas[contador];
         papel.play();
    }
})
//Comfirmar
comfirmar.addEventListener("click", function(){
    if(senhaTexto01.textContent == "A" && senhaTexto02.textContent == "I" && senhaTexto03.textContent == "P"){
        iron.play();
    }
})

