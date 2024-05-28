 num = [5, 10, 7, 3, 1]
 num.push(1) // acrescenta 1
 num.sort() // ordem crescente
 console.log(num) // vai mostrar a variavel
 console.log (`O vetor tem ${num.length} posições`) // vai mostrar quantidade de elementos
 console.log (`O primeiro valor do vetor é ${num[0]}`) // vai mostrar qual elemento está nessa posição 

 pos = num.indexOf(8)
 if(pos = -1) {
    console.log('O valor não foi encontrado')
 } else {
    console.log(`O valor 8 está na posição ${pos}`)
 }
 