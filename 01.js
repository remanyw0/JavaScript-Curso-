const anoDEnascimento = Number(prompt("Digite o seu ano de nascimento: "));
const anoAtual = Number(prompt("Em que ano estamos?"));

const idade = anoAtual - anoDEnascimento;

if (idade >= 18) {
    console.log(`Você completa ${idade} anos em ${anoAtual} e poderar tirar a habilitação.`);
}  else {
    console.log(`Você completa ${idade} anos em ${anoAtual} e não pode tirar a habilitação ainda.`);
}