var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 6){
    console.log('Dawn')
} else if (hora < 12){
    console.log('Morning')
} else if (hora < 18){
    console.log('Afternoon')
} else{
    console.log('Night')
}