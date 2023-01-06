let num = [5, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor ${num.length} tem posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)

if( pos == -1){
    console.log(`O valor 4 não foi encontrado`)
} else{
    console.log(`O valor está na posição ${pos}`)

}
let nine = num.indexOf(9)
console.log(`O valor está na posição ${nine}`)