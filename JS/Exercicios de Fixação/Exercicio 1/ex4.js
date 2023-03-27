/* ## Cálculo de Dano

Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, 
a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, 
e então calcule a quantidade de dano causado baseado nas seguintes regras:

- Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, 
o dano causado será igual a diferença entre o ataque e a defesa.
- Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, 
o dano causado será igual a metade da diferença entre o ataque e a defesa.
- Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida 
do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens. */

let personagem_A;
let poder_ataque_A;
let ataque_A;

let personagem_B;
let vida_B;
let poder_defesa_B;
let escudo_B;
let defesa_B;
let pontos_vida_B;

let dano;

personagem_A = prompt("Qual o nome do primeiro personagem?");
poder_ataque_A = prompt("Qual o poder de ataque do primeiro personagem?");

personagem_B = prompt("Qual o nome do segundo personagem?");
vida_B = prompt("Quantos pontos de vida tem o segundo personagem?");
poder_defesa_B = prompt("Qual o poder de defesa do segundo personage?");
escudo_B = prompt("O segundo personagem possui escudo?");

ataque_A = parseFloat(poder_ataque_A);
defesa_B = parseFloat(poder_defesa_B);
pontos_vida_B = parseFloat(vida_B);

if (ataque_A > defesa_B && escudo_B === "Não") {
  dano = ataque_A - defesa_B;
} else if (ataque_A > defesa_B && escudo_B === "Sim") {
  dano = (ataque_A - defesa_B) / 2;
} else {
  dano = 0;
}

pontos_vida_B -= dano;

alert(personagem_A + "causou" + dano + "pontos de dano em" + personagem_B);
alert(
  personagem_A +
    "\nPoder de ataque:" +
    ataque_A +
    "\n\n" +
    personagem_B +
    "\nPontos de vida:" +
    pontos_vida_B +
    "\nPoder de defesa:" +
    defesa_B +
    "\nPossui escudo:" +
    escudo_B
);
