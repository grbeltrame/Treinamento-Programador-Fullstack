// ## Cadastro de Recrutas

// Escreva um programa em javascript que permita salvar informações de um recruta. As informações a serem salvas são:

// - o primeiro nome
// - o sobrenome
// - o campo de estudo
// - o ano de nascimento

// Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseada no ano de nascimento).

let nome;
let sobrenome;
let campo_de_estudo;
let ano_de_nascimento;
let idade;

nome = window.prompt("Informe seu nome:");
sobrenome = window.prompt("Informe seu sobrenome:");
campo_de_estudo = window.prompt("Informe seu campo de estudo:");
ano_de_nascimento = window.prompt("Informe seu ano de nascimento:");

alert(
  "Cadasrto realizado\n" +
    "\nNome completo:" +
    nome +
    " " +
    sobrenome +
    "\nCampo de estudo:" +
    campo_de_estudo +
    "\nIdade:" +
    (2023 - ano_de_nascimento)
);
