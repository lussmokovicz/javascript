function calcular(){
    var ni = document.getElementById('txtn')
    var tab = document.getElementById('tab')
    if (ni.value.length == 0){
        window.alert('[ERRO] Adicione um número')
    } else{
        var n1 = Number(ni.value)
        var c = 1
        tab.innerHTML = ''
        for(var c = 1; c<=10; c++){
            var item =  document.createElement('option')
            item.text = `${n1} x ${c} = ${n1*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}