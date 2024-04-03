// 1. Imagine que você está criando um sistema escolar para obter a média dos alunos da sala. 
// Foram realizadas 3 avaliações com nota máxima de 10 pontos. 
// Aline, tirou na primeira nota o total de 8 pontos, na segunda nota tirou 9 pontos e na terceira nota 7 pontos. 
// Escreva um programa que receba as notas, faça o cálculo da média e imprima o resultado final da média.

const nota1 = parseInt(prompt("Qual a 1° nota"));
const nota2 = parseInt(prompt("Qual a 2° nota"));
const nota3 = parseInt(prompt("Qual a 3° nota"));
const media = ((nota1 + nota2 + nota3) / 3).toFixed(2);

const notaMensal = document.getElementById("notaMensal");
notaMensal.innerHTML = nota1;
const notaBimestral = document.getElementById("notaBimestral");
notaBimestral.innerHTML = nota2;
const notaTrimestral = document.getElementById("notaTrimestral");
notaTrimestral.innerHTML = nota3;

const mediaElement = document.getElementById("media");
mediaElement.innerHTML = media;


