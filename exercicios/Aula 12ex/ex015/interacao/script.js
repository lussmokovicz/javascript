function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 ||Number(fano.value) > ano){
        window.alert('[ERRO] Verifique seus dados e tente novamente.')
    } else{
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        if(fsex[0].checked){
            gênero = 'homem'
            if( idade >= 0 && idade < 10){
                img.src = 'imagens/menino.jpg'
            } else if (idade < 21){
                img.src = 'imagens/moco.jpg'
            } else if (idade <=60) {
                img.src = 'imagens/homi.jpg'
            } else{
                img.src = 'imagens/vozinho.jpg'
            }
        } else if(fsex[1].checked){
            gênero = 'mulher'
            if( idade >= 0 && idade < 10){
                img.src = 'imagens/menina.jpg'
            } else if (idade < 21){
                img.src = 'imagens/moca.jpg'
            } else if (idade <=60) {
                img.src = 'imagens/muie.jpg'
            } else{
                img.src = 'imagens/vozinha.jpg'
            }
        }
    }








res.style.textAlign = 'center'
res.innerHTML = `Detectamos ${gênero} com idade de ${idade} anos.`
  
















}
