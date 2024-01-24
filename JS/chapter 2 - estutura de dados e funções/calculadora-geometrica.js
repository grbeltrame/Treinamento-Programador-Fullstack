// Calculadora Geométrica
// Escreva um programa em javascript para calcular a área de diferentes formas geométricas.
// O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:
// área do triângulo: base * altura / 2
// área do retângulo: base * altura
// área do quadrado: lado²
// área do trapézio: (base maior + base menor) * altura / 2
// área do círculo: pi * raio² (considere pi = 3.14)
// Você deve escrever o programa usando funções sempre que possível para separar os procedimentos.
// O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.

function triangulo(base, altura) {
  return (base * altura) / 2;
}

function retangulo(base, altura) {
  return base * altura;
}

function quadrado(lado) {
  return lado * lado;
}

function trapezio(base_maior, base_menor, altura) {
  return ((base_maior + base_menor) * altura) / 2;
}

function circulo(raio) {
  pi = 3.14;
  return pi * raio * raio;
}

function menu() {
  let op = "";

  do {
    op = prompt(
      "Escolha uma opção:\n" +
        "\n 1- Area do triangulo" +
        "\n 2- Area do retangulo" +
        "\n 3- Area do quadrado" +
        "\n 4- Area do trapezio" +
        "\n 5- Area do circulo" +
        "\n 6- Sair"
    );

    switch (op) {
      case "1":
        base = prompt("Informe o valor da base:\n");
        altura = prompt("Informe o valor da altura:\n");
        area = triangulo(base, altura);
        console.log("Area do triangulo é " + area);
        break;
      case "2":
        base = prompt("Informe o valor da base:\n");
        altura = prompt("Informe o valor da altura:\n");
        area = retangulo(base, altura);
        console.log("Area do retangulo é " + area);
        break;
      case "3":
        lado = prompt("Informe o valor da lado:\n");
        area = quadrado(lado);
        console.log("Area do quadrado é " + area);
        break;
      case "4":
        base_maior = prompt("Informe o valor da base maior:\n");
        base_menor = prompt("Informe o valor da base menor:\n");
        altura = prompt("Informe o valor da altura:\n");
        area = trapezio(base, altura);
        console.log("Area do trapezio é " + area);
        break;
      case "5":
        raio = prompt("Informe o valor da raio:\n");
        area = circulo(raio);
        console.log("Area do circulo é " + area);
        break;
      case "6":
        console.log("Saindo...");
      default:
        console.log("Opção invalida.");
    }
  } while (op != "6");
}

menu();
