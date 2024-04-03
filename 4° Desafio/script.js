function numPrimo(num) {
  if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function encontrarPrimo(primo) {
    return primo.filter(numPrimo);
}

function exibirNumeroPrimo() {
  const numeros = [23, 16, 11, 8, 19, 14, 5, 21];
  const numerosPrimos = encontrarPrimo(numeros);
  
  const h2 = document.getElementById("numerosPrimos");
  h2.textContent = (`Os números Primos são: ${numerosPrimos.join(", ")}`);
}