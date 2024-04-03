let pontosDeVidaIniciais = 100;
const danoPorAtaque = 20;
const pontosDeVidaRestantes = pontosDeVidaIniciais - (danoPorAtaque * 3);

function vidaResta() {
const vidaRestante = document.getElementById("vidaUsuario")
vidaRestante.innerHTML = (`Vida do personagem: ${pontosDeVidaRestantes}`)
}