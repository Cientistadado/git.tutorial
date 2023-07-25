const nome = 'Paulo Alexandre';      // variaveis com const
const sobrenome = 'Barbosa';
const idade = 37;
const peso = 77;
const altura = 1.75;
let indiceMassaCorporal;            // variaveis com let, podemos renomear e a variavel const não.
let anoNascimento;

indiceMassaCorporal = peso / (altura * altura);
anoNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} Kg`);   // como chamar as variaveis
console.log(`tem ${altura} de altura e seu IMC é de ${indiceMassaCorporal}  e nasci no ano de  ${anoNascimento}.`);

//  não podemos criar uma variavel sem a palavra const ou let.  