// ## Teste de Velocidade

// Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos
// e exiba na tela uma mensagem dizendo qual dos dois é mais rápido
// (ou que as velocidades são iguais se este for o caso)

let carro_A = prompt("Qual o nome do carro A?");
let carro_B = prompt("Qual o nome do carro B?");
let vel_A = prompt("Qual a velocidade do carro A?");
let vel_B = prompt("Qual a velocidade do carro B?");

if (vel_A > vel_B) {
  alert("O carro mais rápido é:" + carro_A);
} else if (vel_B > vel_A) {
  alert("O carro mais rápdio é:" + carro_B);
} else {
  alert("Os dois carros são igualmente rápidos");
}
