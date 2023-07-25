console.log(' Paulo Alexandre');   // tipo  de dados texto = string
console.log("'Paulo' 'Alexandre'");
console.log('"Paulo" "Alexandre"');

console.log(123456, 15.85, 35);          // tipo de dados numerico = Number

console.log('Meu nome é "Paulo Alexandre". Estou aprendende javaScript às', 10, 'da manhã.');
console.log('oi');

alert('Bem Vindo ao meu site');
alert('Meu nome é Paulo !');
alert('Eu serei o seu guia nas proximas etapas.');
alert('Então bora se divertir. ')
confirm('Está preparado para se divertir?');
// aparecerá dois valores boolean, True, False
prompt('Digite seu nome');
let num1 = prompt('Digite um numero?');
let num2 = prompt('Digite outro numero?');
num1 = parseFloat(num1);  //Podemos converter a variavel também com Number 
num2 = parseFloat(num2);
const resultado = num1 + num2;
alert(`o resultado é : ${resultado}`);  