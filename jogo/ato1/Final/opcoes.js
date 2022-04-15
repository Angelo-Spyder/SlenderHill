
var opcao1 = document.querySelector("#opcao1");

var papel = document.querySelector(".paper-slide");

opcao1.addEventListener("mouseover", function(){
    papel.play();
});

opcao1.addEventListener("click", function(){
    location.href = "../../../"
});

