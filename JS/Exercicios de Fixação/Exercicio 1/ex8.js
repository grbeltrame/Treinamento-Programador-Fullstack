// ## Controle Financeiro

// Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível 
// e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. 
// Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, 
// somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro 
// e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. 
// A opção de sair deve encerrar o programa.

let valor_inicial = prompt("Qual o valor inicial?")
valor_inicial = parseFloat(valor_inicial)
let op


do{
    alert("Valor inicial:" + valor_inicial)
    op - prompt("\n\nVocê deseja:"+
    "\n 1- Adicionar"+
    "\n 2- Remover" +
    "\n 3- Sair")
    switch(op){
        case "1":
            valor_inicial += prompt("Quando deseja adicionar?")
            alert("O valor total agora é" + valor)
            break
        case "2":
            valor_inicial -= prompt("Quando deseja remover?")
            alert("O valor total agora é" + valor)
            break  
        case "3":
            alert("Saindo")
            break        
    }  
}while( op !== "3")