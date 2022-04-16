
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
        texto[0].textContent = `Drakard começa a dizer:`
        texto[1].textContent = `"Não foi muito difícil, você se destaca fácil por aqui, enfim, eu recomendo que fique na minha casa hoje, aquilo da sua janela é muito suspeito, pode ser que alguém queira te roubar, já levei suas coisas vamos agora." `
        cont = 1;
    }else if(cont == 1){
        location.href = "../final/final.html";
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
        location.href = "SlenderMan/index.html"
        cont = 1;
    }
    
    opcao1.classList.add("desaparecer");
    setTimeout(
        () => {
            opcao1.remove();
        },1000);
});
