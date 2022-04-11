
var opcao1 = document.querySelector("#opcao1");
var opcao2 = document.querySelector("#opcao2");

var texto = document.querySelector(".texto-historia")
var papel = document.querySelector(".paper-slide");

var cont = 0;

opcao1.addEventListener("mouseover", function(){
    papel.play();
});

opcao1.addEventListener("click", function(){
    
    if(cont == 0){
        opcao1.textContent = `prosseguir`;
        texto.textContent = `Ao falar com a pessoa ela te entrega um bilhete "Não confie nos adultos" e some antes que possa perguntar. Enquanto isso alguém assalta um turista e consegue escapar.`
        cont = 1;
    }else if(cont == 1){
        location.href = "/home.html";
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
        texto.textContent = `Devia ser alguém te confundindo, ao prosseguir você avista um ladrão roubando o dinheiro de um turista e consegue pará-lo com facilidade, o prende em um poste até a segurança chegar. Que bom que deu tempo.`
        cont = 1;
    }else if(cont == 1){
        location.href = "/home.html";
    };
    
    opcao1.classList.add("desaparecer");
    setTimeout(
        () => {
            opcao1.remove();
        },1000);
});
