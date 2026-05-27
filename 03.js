const peso = Number(prompt("Digite seu peso em kg: "));
const altura = Number(prompt("Sua altura em (m): "));

const imc = peso / (altura * altura);

console.log("Seu IMC é: " + imc);;

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc <= 24.9) {
    console.log("Peso normal");
} else if (imc <= 29.9) {
    console.log("Sobrepeso");
} else if (imc <= 34.9) {
    console.log("Obesidade grau 1");
} else if (imc <= 39.9) {
    console.log("Obesidade grau 2");
} else {
    console.log("Obesidade grau 3");
}