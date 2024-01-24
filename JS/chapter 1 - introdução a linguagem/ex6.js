/* ## Visitando Novas Cidades

Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. 
Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, 
e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. 
No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou. */

const nome = prompt("Qual seu nome?");
let visitou = prompt("Você ja visitou alguma cidade(Sim/Não)?");
let cidades = "";
let cont = 0;

while (visitou === "Sim") {
  let cidade = prompt("Qual o nome da cidade?");
  cidades += cidade;
  cont++;
  visitou = prompt("Você ja visitou alguma outra cidade(Sim/Não)?");
}

alert(
  "Turista:" +
    nome +
    "\nQuantidade de cidades visitadas:" +
    cont +
    "\nCidades visitadas:\n" +
    cidades
);
