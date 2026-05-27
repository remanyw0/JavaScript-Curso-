const num1 = Number(prompt("Digite o primeiro número:"));
const num2 = Number(prompt("Digite o segundo número:"));

const operacao = Number(prompt("Escolha uma operação:\n1 - soma\n2 - subtração\n3 - multiplicação\n4 - divisão"));

switch (operacao) {
    case 1:
        console.log("Resultado da soma: " + (num1 + num2));
        break;
    case 2:
        console.log("Resultado da subtração: " + (num1 - num2));
        break;
    case 3:
        console.log("Resultado da multiplicação: " + (num1 * num2));
        break;
    case 4:
        console.log("Resultado da divisão: " + (num1 / num2));
        break;
    default:
        console.log("Opção inválida.");
}