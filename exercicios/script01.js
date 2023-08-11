function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] verifique os dados e tente novamente!')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            res.innerHTML = `Você é um ${genero}, e tem ${idade} anos`
            
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            res.innerHTML = `Você é uma ${genero}, e tem ${idade} anos`
        }
       
    }

} 