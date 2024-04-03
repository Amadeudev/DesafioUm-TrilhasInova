const frase = "What is Lorem Ipsum?";
const palavrasDaFrase = document.getElementById("numerosPalavras")

function contarPalavras(){
const palavras = frase.split(" ");
const numeroDePalavras = palavras.length;
palavrasDaFrase.textContent = (`Número de palavras na frase: ${numeroDePalavras}`);
}