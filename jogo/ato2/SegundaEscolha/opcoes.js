
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
        texto[0].textContent = `Ela diz:`
        texto[1].textContent = `"Estou tentando ajudar, eu não posso ficar tanto tempo aqui fora, siga em frente já fiz o que pude."`
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
        opcao2.textContent = `prosseguir`;
        texto[0].textContent = `Ela diz:`
        texto[1].textContent = `"Uma pessoa que é o responsável  por tudo que tá acontecendo. Pessoas que foram contra ele sumiram sem explicação ou enlouqueceram. Preciso ir, tenho pouco tempo."`
        cont = 1;
    }else if(cont == 1){
        location.href = "./SlenderMan/index.html"
    };
    
    opcao1.classList.add("desaparecer");
    setTimeout(
        () => {
            opcao1.remove();
        },1000);
});
