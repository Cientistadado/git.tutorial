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
        var img = document.createElement('img')
        if (fsex[0].checked) {
           
            genero = 'Homem'
            img.setAttribute('src', 'homem01.jpg')
            res.innerHTML = `Você é um ${genero}, e tem ${idade} anos`
            res.appendChild(img)
            
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            img.setAttribute('src', 'mulher01.jpg')
            res.innerHTML = `Você é uma ${genero}, e tem ${idade} anos`
            res.appendChild(img)
        }
       
    }

} 