const numerosDesordenados = [12, 5, 23, 17, 8, 14, 3, 19]

numerosDesordenados.sort(function(a, b) {
    return a - b;
});

const numerosString = numerosDesordenados.join(', ');

function mostrar(){
const numerosOrdenados = document.getElementById("frascosOrdenados")
numerosOrdenados.textContent = (`Frascos Ordenados: ${numerosString}`);
}