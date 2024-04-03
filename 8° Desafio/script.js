const valorMulta = 0.50;
const diasAtrasados = 7;
const valorTotal = valorMulta * diasAtrasados;

function calcularValor(){
    const valorParaPagar = document.getElementById("valorPagar");
    valorParaPagar.textContent = (`Valor total a pagar: R$ ${valorTotal.toFixed(2)}`);
}