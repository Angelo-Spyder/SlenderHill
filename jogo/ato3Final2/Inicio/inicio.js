
var botao = document.querySelector("#opcao1");
var papel = document.querySelector(".paper-slide");

botao.addEventListener("mouseover", function(){
    papel.play();
});

botao.addEventListener("click",function(){
    location.href = "../../puzzles/finalSlender/puzzle1/puzzle.html"
});