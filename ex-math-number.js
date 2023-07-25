const numero = Number(prompt('Digite um numero:')); // todo comando prompt retorna uma string, mas com o number ele ja transforma em numero.
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('Texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';   // estou limpando a palavra 'texto' do HTML
texto.innerHTML += `<p>Seu numero + 2 é igual a = ${numero + 2}.</p>`;
texto.innerHTML += `<p>A Raiz quadrada é : ${numero ** 0.5}. </p>`;
texto.innerHTML += `<p>${numero} é inteiro : ${Number.isInteger(numero)}. </p>`;
texto.innerHTML += `<p>Arredondado para cima é : ${Math.ceil(numero)}. </p>`;
texto.innerHTML += `<p>Arredondado para baixo é : ${Math.floor(numero)}. </p>`;
texto.innerHTML += `<p>Com duas casas decimais é : ${numero.toFixed(2)}. </p>`;


// Para que todas as linhas apareça o sinal de += tem que ser adicionado, pois só o sinal de igual ele simplismente salva na memoria, com o sinal de += ele salva e adiciona mais linha no innerHTML.