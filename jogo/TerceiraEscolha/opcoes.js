
var opcao1 = document.querySelector("#opcao1");
var opcao2 = document.querySelector("#opcao2");

var texto = document.querySelectorAll(".texto-historia")
var papel = document.querySelector(".paper-slide");
var janela = document.querySelector(".janela")
var estatica = document.querySelector("static")

var cont = 0;

//janela.play()

opcao1.addEventListener("mouseover", function(){
    papel.play();
});

opcao1.addEventListener("click", function(){
    
    if(cont == 0){
        opcao1.textContent = `prosseguir`;
        texto[0].textContent = `Pela janela há alguém correndo pra longe e você escuta um barulho de chiado que logo fica atrás de você, e quando se vira não vê direito além de um borrão, e por já estar na janela você pula dela e cai no chão...`
        texto[1].textContent = `Acorda no dia seguinte, sua arma sumiu e a janela continua quebrada.`
        texto[2].innerHTML = "";
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
    estatica.play()
    if(cont == 0){
        opcao2.textContent = `Tentar novamente`;
        texto[0].textContent = `Ao pegar a arma um chiado do outro lado da porta surge e você dispara quando algo borrado surge a sua frente com tom ameaçador, sua arma é levada e você leva um empurrão e uma mordida no pescoço, conseguindo ver pouco, apenas um terno e depois nada...`;

        texto[1].textContent = `GAME OVER"`;

        texto[2].innerHTML = ""
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
