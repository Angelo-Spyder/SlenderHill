
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
        texto[0].textContent = `Ema abre a porta e diz:`
        texto[1].textContent = `"Mesmo ? Só por ter lido no início ? Eu espero que do tipo que escolhe fazer a coisa certa, como aquela de ter olhado pela janela, eu sei que pra você é só um joguinho mas não pra nós é muito difícil, por favor eu sei que Drakard está envolvido nisso de alguma forma. Mas não consigo fazer nada."`
        cont = 1;
    }else if(cont == 1){
        location.href = "../QuintaEscolha/Quinta.html";
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
        texto[0].textContent = `Ema abre a porta e olha como com um dúvida: `
        texto[1].textContent = `"Se continua são e bem, algo diz que ele quer algo de você,Talvez por ser peça principal aqui, constantemente aparece como num sonho e não me deixa acordar ou intervindo de alguma forma, eu sei que você deve ter passado pelo mesmo , eu sei que Drakard têm algum envolvimento, mas por favor faça a escolha certa."`
        cont = 1;
    }else if(cont == 1){
        location.href = "../QuintaEscolha/Quinta.html";
    };
    
    opcao1.classList.add("desaparecer");
    setTimeout(
        () => {
            opcao1.remove();
        },1000);
});
