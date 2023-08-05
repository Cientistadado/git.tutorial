//           condições aninhadas

var idade = 52

if ( idade > 18 && idade <  50) {
    console.log('Voce é jovem')
} else {
    if (idade > 10 && idade < 18) {
        console.log('Voce é adolescente')
    }
    if (idade > 50 ) {
        console.log('Voce é velho')
    }
    if (idade < 10) {
        console.log('Voce é uma criança')
    }
}