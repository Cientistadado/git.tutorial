//          CONDIÇÕES MULTIPLAS

var agora = new Date()
var diaSem = agora.getDay()

//  console.log(`Hoje é ${diaSem}`)

switch (diaSem) {
    case 0:
        console.log('Otimo Domingo')
        break
    case 1:
        console.log('Otima Segunda Feira')
        break
    case 2:
        console.log('Otima Terça Feira')
        break
    case 3:
        console.log('Otima Quarta Feira')
        break
    case 4:
        console.log('Otima Quinta Feira')
        break
    case 5:
        console.log('Otima Sexta Feira')
        break
    case 6:
        console.log('Otimo Sabado')
        break
    
}
