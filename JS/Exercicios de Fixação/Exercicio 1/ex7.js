// ## Menu Interativo

// Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. O programa deverá iniciar mostrando 
// as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. 
// Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir 
// novamente o menu com as 5 opções. Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o 
// sistema está sendo encerrado deve ser exibida na 
// tela e então o programa é finalizado.

let op = ""

do{
    op = prompt("Escolha uma opção:\n" +
    "\n 1- Iniciar" +
    "\n 2- Recomeçar" +
    "\n 3- Pausar" +
    "\n 4- Voltar" +
    "\n 5- Encerrar")
    
    switch(op){
        case "1":
            alert("Iniciar")
            break
        case "2":
            alert("Recomeçar")
            break
        case "3":
            alert("Pausar")
            break
        case "4":
            alert("Voltar")
            break
        case "5":
            alert("O sistema está sendo encerrado")
            break
        default:
            alert("Opção inválida")
    }
}while (op !== "5")