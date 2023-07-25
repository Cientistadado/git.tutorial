/*const nome = 'Paulo aleaxandre';
console.log(nome.length); // para saber o tamanho/ indice da string

console.log(nome.slice(2, 8));  // para fatiar uma string
const nome1 = prompt('Digite seu nome');
alert(`Seu nome tem ${nome1.length} letras`); */    // só retirar as barras de comentarios.

const nome = prompt('Digte seu nome completo.');
document.body.innerHTML += `Seu nome é : ${nome.toUpperCase()} <br />`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é : ${nome[1]}<br />`;
document.body.innerHTML += `O primeiro índice da letra A do seu nome é: ${nome.indexOf('a')}<br /> `;
document.body.innerHTML += `O último índice da letra A do seu nome é : ${nome.lastIndexOf('a')}<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome é : ${nome.slice(-3)} <br />`;
document.body.innerHTML += `As palavras do seu nome são : ${nome.split('')} <br />`;
document.body.innerHTML += `Seu nome em letras maiúsculas é : ${nome.toUpperCase()}<br />`;
document.body.innerHTML += `Seu nome em letras minúsculas é : ${nome.toLowerCase()}`;