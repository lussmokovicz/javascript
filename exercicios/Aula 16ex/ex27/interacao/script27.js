var num  = document.getElementById('txtn')
var lista = document.getElementById('lista')
var res = document.getElementById('res')
var valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }  
}

function registrar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Número ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''

    } else{
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar.')
    } else{
        var total = valores.length
        var menor = valores[0]
        var maior = valores[0]
        var soma = 0
        var media = 0
        media.toFixed(3)
        for(var pos in valores){
            soma += valores[pos] 
            media = soma/valores.length
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]  
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Sua lista tem ${total} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor da sua lista é ${maior} e o menor é ${menor}`
        res.innerHTML += `<p> Somando todos os valores, temos o total de ${soma}`
        res.innerHTML += `<p> Fazendo a média entre todos os valores, temos que ela vale ${media}`

    }
}
