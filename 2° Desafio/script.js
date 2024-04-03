let numerosDaLoteria = [15, 8, 90, 75, 102, 6, 2];

let numeroMinimo = numerosDaLoteria[0];
let numeroMaximo = numerosDaLoteria[0];

for (let i = 1; i < numerosDaLoteria.length; i++) {
  if (numerosDaLoteria[i] < numeroMinimo) {
    numeroMinimo = numerosDaLoteria[i];
  }

  if (numerosDaLoteria[i] > numeroMaximo) {
    numeroMaximo = numerosDaLoteria[i];
  }
}

const numerosLoteria = document.getElementById("numerosLoteria");
numerosLoteria.innerHTML = ('Os números de Tais na loteria são: 15, 8, 90, 75, 102, 6, 2');

function mostrarNumeros(){
const maiorNumero = document.getElementById("maiorNumero");
maiorNumero.innerHTML = (`O maior número é: ${numeroMaximo}`);
const menorNumero = document.getElementById("menorNumero");
menorNumero.innerHTML = (`O menor número é:  ${numeroMinimo}`);
}