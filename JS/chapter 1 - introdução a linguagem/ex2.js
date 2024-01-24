// ## Calculadora de 4 Operações

// Escreve um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).

// Após calcular os resultados o programa deve exibi-los na tela.

let valor1;
let valor2;
let x;
let y;

let soma;
let subtração;
let multiplicação;
let divisão;

valor1 = window.prompt("informe um valor:");
valor2 = window.prompt("informe outro valor:");

x = parseFloat(valor1);
x = parseFloat(valor2);

soma = x + y;

subtração = x - y;

multiplicação = x * y;

divisão = x / y;

alert(
  "Resultados:\n" +
    "\n A soma é:" +
    soma +
    "\n A diferença é:" +
    subtração +
    "\n A multiplicação é:" +
    multiplicação +
    "\n A divisão é:" +
    divisão
);
