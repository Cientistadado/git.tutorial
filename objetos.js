// so um exemplo de array, pois em objetos ultiliza-se {}
/*let array = [1,2,3];
array.push(4);
array[0] = 'Paulo';
array = 'outra';
console.log(array);

const array = [1,2,3];
array.push(4);
array[0] = 'Paulo';
//array = 'outra';
console.log(array);*/

// objetos {}
function criarPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}
const pessoa1 = criarPessoa('Paulo', 'Barbosa', 36);
const pessoa2 = criarPessoa('Nayara', 'Rodrigues', 32);
const pessoa3 = criarPessoa('Rodrigo', 'Martin', 6);

console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);


// objeto com variavel

const pessoal = {   // criamos objeto com variavel.
    nome: 'Paulo',  // nessa linha temos os atributos.
    sobrenome: 'Barbosa',
    idade: 36,

    fala() {    // função function simplificada. so com "fala".
        console.log(`O meu nome é ${this.nome} ${this.sobrenome} e a minha idade atual é ${this.idade}.`); 

    },

    incrementaIdade() {
        this.idade++;
    }
};
 pessoal.fala();       // nessa linha chamamos a variavel com o objeto
 pessoal.incrementaIdade();
 pessoal.fala();
 pessoal.incrementaIdade();