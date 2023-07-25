//                  função saudação

function saudacao(nome) {      // criei a função, dei um parametro a ela dentro do ()
    return `Bom dia ${nome}!`;  // essa funçao retornara o parametro dentro do ()
}

const variavel = saudacao('Rodrigo');   // a variavel recebeu o valor do parametro da função.
console.log(variavel);     // retornará o valor que foi atribuido a função

//            função soma 

function soma(x, y) {  
    const resultado = x + y;
    return resultado;
    // qualquer codigo que estiver abaixo da linha do return não sera execultada
    
}
console.log(soma(5));
console.log(soma(5 , 5));
console.log(soma(100 , 10));
// console.log(resultado); nessa linha de codigo vai dar um erro pois, nada que esta dentro da linha da função pode ser acessado fora da linha da função.

function soma(x, y = 1) {  // nessa linha  so sera somado com o numero 5
    const resultado = x + y;
    return resultado;
    
}
console.log(soma(5));
console.log(soma( 5));
console.log(soma(0 , 10));

//        variavel = function

const raiz = function (n) {
    return n ** 0.5;
} ;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

/*const raiz = function (n) {
    return n ** 0.5;
} ;*/  // toda essa função pode ser simplificada assim

// eron function   =>

const raizes = n => n ** 0.5;   // tem o msm resultado
console.log(raizes(64));