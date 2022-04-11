
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
        opcao1.textContent = `prosseguir`;
        texto[0].textContent = `Drakard coça a cabeça e diz.`
        texto[1].textContent = `"Bom não há muito o que sei, além daquilo, mas eu posso afirmar que as crianças estão mais estranhas que os adultos, inventando histórias e dizendo pra não confiarem em adultos, desconfio que seja mais uma brincadeira delas ou um surto coletivo."`
        cont = 1;
    }else if(cont == 1){
        location.href = "../SegundaEscolha/Segunda.html";
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
        opcao2.textContent = `prosseguir`;
        texto[0].textContent = `Você segue até o quarto e não há ninguém lá no caminho, mas há um bilhete no chão na entrada do seu quarto que diz.`;
        texto[1].textContent = `"Nada é real, tudo isso é farsa, saia logo da casa, saia de tudo, e nunca mais volte."`
        cont = 1;
    }else if(cont == 1){
        location.href = "../SegundaEscolha/Segunda.html";
    };
    
    opcao1.classList.add("desaparecer");
    setTimeout(
        () => {
            opcao1.remove();
        },1000);
});
