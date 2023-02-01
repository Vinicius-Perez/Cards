const btnAvancar = document.getElementById("btn-avancar");
let cartaoAtual = 0
const btnVoltar = document.getElementById("btn-voltar");

btnAvancar.addEventListener("click", function(){
    const cartoes = document.querySelectorAll(".cartao");
    cartaoAtual++;
    console.log(cartaoAtual);
    cartoes[cartaoAtual].classList.add("selecionado");
})

btnVoltar.addEventListener("click", function(){
if(cartaoAtual=== 0) return;

    const cartoes = document.querySelectorAll(".cartao");
    cartoes[cartaoAtual].classList.remove("selecionado");

    cartaoAtual--;
    console.log(cartaoAtual);
})