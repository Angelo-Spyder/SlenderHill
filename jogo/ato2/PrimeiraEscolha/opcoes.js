
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
        texto[0].textContent = "A pessoa diz: "
        texto[1].textContent = `"A cidade é assim faz muito tempo, não há mais movimento por conta de desaparecimento de pessoas, ninguém veio ajudar espero que possa fazer algo por aqui algumas pessoas chegam a descrever quem faz isso, mas nunca deu em algo expecífico. Preciso ir agora, estou com presa".`
        texto[2].textContent = ""
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
        texto[0].textContent = "A pessoa diz: "
        texto[1].textContent = `"Olha, pessoas têm dito ter visto muitas coisas nos ultimos dias após verem um homem estranho de terno, melhor tomar cuidado e ir pra casa antes de anoitecer, deve ser algum louco. ".`
        texto[2].textContent = ""
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
