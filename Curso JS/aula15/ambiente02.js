valores = [8, 1, 4, 2, 6]
valores.sort()
//console.log(valores)

//console.log(valores[0])

/* for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem valor de ${valores[pos]} `)
}
*/

for(let pos in valores){
    console.log(`A posição ${pos} tem valor de ${valores[pos]} `)
}