function conteIdade() {
  const dataNascimento = document.getElementById("dataNascimento").value;

  if (/^\d{4}-\d{2}-\d{2}$/.test(dataNascimento)) {
    const hoje = new Date();
    const mesAtual = hoje.getMonth() + 1;
    const diaAtual = hoje.getDate();
    
    const partesDataNascimento = dataNascimento.split("-");
    const anoNascimento = parseInt(partesDataNascimento[0]);
    const mesNascimento = parseInt(partesDataNascimento[1]);
    const diaNascimento = parseInt(partesDataNascimento[2]);

    let idade = hoje.getFullYear() - anoNascimento;
    if (mesAtual < mesNascimento || mesAtual === mesNascimento && diaAtual < diaNascimento) {
      idade--;
    }

    const idadeArredondada = Math.floor(idade);
    const idadeElemento = document.getElementById("idade");
    idadeElemento.innerHTML = `Idade: ${idadeArredondada}`;
  } else {
    alert("Por favor, digite a data de nascimento no formato 'yyyy-MM-dd'.");
  }
}