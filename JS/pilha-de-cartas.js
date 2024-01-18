// Pilha de Cartas
// Escreva um programa em javascript para simular um baralho de cartas.
// O programa deve iniciar mostrando na tela um menu interativo contendo
// a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”.
// Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho.
// Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada.
// O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

let cartas = [
  "Marcos",
  "Matheus",
  "Henrique",
  "Giovana",
  "Luiza",
  "João",
  "Maria",
];

let op = "";

do {
  console.log("Quantidade de cartas no baralho: " + cartas.length);
  for (let i = 0; i < cartas.length; i++) {
    console.log(cartas[i]);
  }

  op = prompt(
    "Escolha uma opção:\n" +
      "\n 1- Adicionar carta" +
      "\n 2- Puxar Carta" +
      "\n 3- Sair"
  );

  switch (op) {
    case "1":
      (nome = prompt("Informe o nome da carta:")), cartas.unshift(nome);
      break;
    case "2":
      const cartaPuxada = baralho.pop();
      if (!cartaPuxada) {
        alert("Não há nenhuma carta no baralho!");
      } else {
        alert("Você puxou um(a) " + cartaPuxada);
      }
      break;
    case "3":
      break;
    default:
      console.log("Opção invalida.");
  }
} while (op != 3);
