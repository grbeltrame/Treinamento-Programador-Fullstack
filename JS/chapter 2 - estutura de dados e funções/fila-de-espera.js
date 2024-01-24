// Fila de Espera
// Escreva um programa em javascript para simular uma fila de espera em um consultório médico.
// O programa deve iniciar mostrando na tela um menu interativo contendo a
// lista de todos os pacientes esperando em ordem mostrando
// sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc).
// O menu também deve permitir escolher entre as opções de “Novo paciente”,
// para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente),
// “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”.
// O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

let pacientes = [
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
  for (let i = 0; i < pacientes.length; i++) {
    console.log(i + 1 + "°" + " " + pacientes[i]);
  }

  op = prompt(
    "Escolha uma opção:\n" +
      "\n 1- Novo Paciente" +
      "\n 2- Consultar Paciente" +
      "\n 3- Sair"
  );

  switch (op) {
    case "1":
      (nome = prompt("Informe o nome do paciente:")), pacientes.push(nome);
      break;
    case "2":
      const pacienteConsultado = fila.shift();
      if (!pacienteConsultado) {
        alert("Não há pacientes na fila!");
      } else {
        alert(pacienteConsultado + " foi removido da fila.");
      }
      break;
    case "3":
      break;
    default:
      console.log("Opção invalida.");
  }
} while (op != 3);
