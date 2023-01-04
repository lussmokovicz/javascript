function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = (`Agora são ${hora} horas.`)
    if (hora < 12){
        msg.innerHTML += '<p>Bom dia</p>'
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#B7C5AE'
    } else if (hora <= 18){
        msg.innerHTML += '<p>Boa tarde</p>'
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#F0CE6D'
    } else if (hora >18){
        msg.innerHTML += '<p>Boa noite</p>'
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#100F15'
    }
}