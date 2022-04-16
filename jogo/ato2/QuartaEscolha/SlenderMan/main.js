
var comecar = document.querySelector("#botao-comecar");
var sino = document.querySelector(".sino");

comecar.addEventListener("mouseover", function(){
    var papel = document.querySelector(".papel-slide");
    papel.play();
});

comecar.addEventListener("click", function(){
    sino.play()
})

setTimeout( () => {
    location.href = "../../QuintaEscolha/Quinta.html"
},5000)