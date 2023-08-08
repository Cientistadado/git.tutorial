var agora = new Date()
var hora = agora.getHours()

console.log(`São exatamente ${hora} horas`)
if (hora > 0 && hora <= 6) {
    console.log('Boa madrugada !!')
} else if (hora > 7 && hora <= 12) {
    console.log('Bom Dia !!')
} else if (hora > 13 && hora <= 18) {
    console.log('Boa tarde !!')
} else {
    console.log('Boa Noite !!')
}