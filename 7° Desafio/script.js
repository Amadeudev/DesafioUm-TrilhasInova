// Definir as variáveis para armazenar os preços dos itens
const precoItem1 = 2.50;
const precoItem2 = 3.75;
const precoItem3 = 1.99;

// Calcular o valor total da compra
const precoTotal = (`R$  ${precoItem1 + precoItem2 + precoItem3}`);
const valorTotal = document.getElementById("valorTotal")

function calcular (){
    valorTotal.textContent = (`Valor Total: ${precoTotal}`);
}