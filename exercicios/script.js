function carregar()  {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    

    if (hora > 0 && hora < 12) {
        // Bom dia !
        img.src = 'manha01.jpg' 
        msg.innerHTML = `BOM DIA ! Agora são ${hora} horas`
        document.body.style.background = '#e2cd9f'
    
    } else if ( hora >= 12 && hora < 18) {
        // Boa tarde !
        img.src = 'tarde-01.jpg'
        msg.innerHTML = `BOA TARDE !  Agora são ${hora} horas`
        document.body.style.background = '#b9846f'
    
    } else {
        // Boa noite !
        img.src = 'noite01.jpg'
        msg.innerHTML = `BOA NOITE !  Agora são ${hora} horas`
        document.body.style.background = '#515154'
    }
}