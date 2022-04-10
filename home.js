 
var comecar = document.querySelector("#botao-comecar");

comecar.addEventListener("mouseover", function(){
    var papel = document.querySelector(".papel-slide");
    papel.play();
});

comecar.addEventListener("click", function(){
    var sino = document.querySelector(".sino");
    sino.play()
    setInterval(
        () => {
            location.href = "jogo/PrimeiraEscolha/Primeira.html"
        },3000
    )
    
})