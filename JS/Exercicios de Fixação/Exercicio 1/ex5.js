/* ## Conversor de Medidas

Escreva um programa em javascript que funcione como um conversos de medidas. 
O programa deverá pedir por um valor em metros e então dar a opção de escolher 
para qual unidade de medida esse valor deve ser convertido. As opções são:

- milímetro (mm)
- centímetro (cm)
- decímetro (dm)
- decâmetro (dam)
- hectômetro (hm)
- quilômetro (km)

O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção 
diferente das disponíveis (use o break e o default para isso) */

let valor = prompt("Informe um valor em metros:");
let unidade = prompt(
  "Informe a unidade de medida para conversão:" +
    "\nmilímetro (mm)" +
    "\ncentímetro (cm)" +
    "\ndecímetro (dm)" +
    "\ndecâmetro (dam)" +
    "\nhectômetro (hm)" +
    "\nquilômetro (km)"
);

let metros = parseFloat(valor);
let convertido;

switch (unidade) {
  case "mm":
    convertido = metros * 1000;
    alert(valor + "m =" + convertido + "mm");
    break;
  case "cm":
    convertido = metros * 100;
    alert(valor + "m =" + convertido + "cm");
    break;
  case "dm":
    convertido = metros * 10;
    alert(valor + "m =" + convertido + "dm");
    break;
  case "dam":
    convertido = metros / 10;
    alert(valor + "m =" + convertido + "dam");
    break;
  case "hm":
    convertido = metros / 100;
    alert(valor + "m =" + convertido + "hm");
    break;
  case "km":
    convertido = metros / 1000;
    alert(valor + "m =" + convertido + "km");
    break;
  default:
    alert("Opção invalida");
}
