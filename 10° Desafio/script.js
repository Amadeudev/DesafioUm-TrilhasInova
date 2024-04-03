const frase = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";
let contadorLetrasMaiusculas = 0;

for (let i = 0; i < frase.length; i++) {
  if (frase[i] === frase[i].toUpperCase() && isNaN(frase[i])) {
    contadorLetrasMaiusculas++;
  }
}

function contarLetras(){
const imprimirNum = document.getElementById("letrasMaiusculas")
imprimirNum.innerHTML = (`Letras maiúsculas: ${contadorLetrasMaiusculas}`);
}