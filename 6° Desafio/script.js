function fatorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * fatorial(number - 1);
    }
  }

const fatorialDe12 = fatorial(12);

function imprimirFatorial(){
const fatorialImpresso = document.getElementById("fatorialImpressoPagina")
fatorialImpresso.textContent = (`Fatorial de 12: ${fatorialDe12}`);
}