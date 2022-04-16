
var opcao1 = document.querySelector("#opcao1");
var opcao2 = document.querySelector("#opcao2");

var texto = document.querySelectorAll(".texto-historia")
var papel = document.querySelector(".paper-slide");

var cont = 0;

opcao1.addEventListener("mouseover", function(){
    papel.play();
});

opcao1.addEventListener("click", function(){
    
    if(cont == 0){
        opcao1.textContent = `ato 3`;
        texto[0].textContent = `No quarto secreto havia um rádio que ligado fazia o mesmo som de estática, e um terno com uma máscara branca, junto de um diário.`
        texto[1].textContent = `"Eu imaginava que teria mais sossego, agora só preciso entregar alguém pra finalmente ter minha paz de não ter que sofrer aqueles pesadelos, eu não sei como fui me meter nisso, preciso ir logo ao hospital para fazer a troca."`
        texto[2].textContent = `Isso comfirma a culpa de Drakard e seu envolvimento com mais alguém.
        Fim do ato 2`
        cont = 1;
    }else if(cont == 1){
        location.href = "../TerceiraEscolha/Terceira.html";
    };
    
    opcao2.classList.add("desaparecer");
    setTimeout(
        () => {
            opcao2.remove();
        },1000);
});

opcao2.addEventListener("mouseover", function(){
    papel.play();
});

opcao2.addEventListener("click", function(){
    
    if(cont == 0){
        opcao2.textContent = `ato 3`;
        texto[0].textContent = `O quarto secreto havia um caderno e rabiscos sem sentido por todo lado.No diário havia escrito:`
        texto[1].textContent = `Preciso entregar alguém logo, o slender é mais que real é fora de qualquer razão, tanto que nem entendo como ninguém suspeita de mim, e com nosso visitante já garanto uma possível troca, só ir ao hospital e ter minha vida e a de todos em paz, as alucinações mostram quem é escolhido"`
        texto[2].textContent = `Fim do segundo ato`
        cont = 1;
    }else if(cont == 1){
        location.href = "../TerceiraEscolha/Terceira.html";
    };
    
    opcao1.classList.add("desaparecer");
    setTimeout(
        () => {
            opcao1.remove();
        },1000);
});
