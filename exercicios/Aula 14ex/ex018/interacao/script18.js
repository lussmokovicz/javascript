function contar(){
    var ni = window.document.getElementById('txti')
    var nf =  window.document.getElementById('txtf')
    var p = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')
    if(ni.value.length == 0 || nf.value.length ==0 || p.value.length == 0){
        window.alert('[ERRO] Faltam dados')
    } else{
        res.innerHTML = 'Contando... <br>'
        var n1 = Number(ni.value)
        var n2 = Number(nf.value)
        var n3 = Number(p.value)
        if (n3 <= 0){
            window.alert('Passo inválido! Considerando PASSO = 1')
            n3 = 1
        }
        if(n1 < n2){ //CONTAGEM CRESCENTE
            for(var c = n1 ; c <= n2 ; c = c + n3){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else { // CONTAGEM DECRESCENTE
            for(var c = n1; c >= n2; c = c - n3){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }   
        res.innerHTML += ` \u{1F3C1}`
    } 

}