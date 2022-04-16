
var opcao1 = document.querySelector("#opcao1");
var opcao2 = document.querySelector("#opcao2");

var texto = document.querySelectorAll(".texto-historia");
var papel = document.querySelector(".paper-slide");

var secaoImagem = document.querySelector(".secao-imagem")
var imagem = document.querySelector(".imagem-historia");

var cont = 0;

opcao1.addEventListener("mouseover", function(){
    papel.play();
});

opcao1.addEventListener("click", function(){
    
    if(cont == 0){
        opcao1.textContent = `prosseguir`;
        texto[0].textContent = `Loupan olha incrédulo e diz: `
        texto[1].textContent = `"Se estiver indo atrás disso como a outra pessoa estava, pode ser que se meta em algo pior, esse rabisco é muito parecido com o que a Ema fala ter visto, sem dúvidas eu passei muito tempo com ela depois do sumiço da filha dela, ela mora ali perto."`

        imagem.remove();
        secaoImagem.innerHTML = `<img style="opacity: 0.4; transform: rotate(180deg);" class="imagem-historia" src="../../../Images/slender-fundoBranco.png" alt="">`;

        cont = 1;
    }else if(cont == 1){
        location.href = "../QuartaEscolha/Quarta.html";
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
        texto[0].textContent = `Loupan se questiona e diz: `
        texto[1].textContent = `"Olha muitas pessoas têm falado que foram atormentadas e algumas até nunca mais vi, acho que foram embora por algum problema ou surto, dizem ter ouvido chiados e ter visto alguém de terno as atormentando como um fantasma, a Ema é quem está dizendo isso agora, desde que a filha dela sumiu diz a mesma coisa com palavras diferentes."`
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
