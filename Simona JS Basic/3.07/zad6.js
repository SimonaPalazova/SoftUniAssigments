function zad6(input){
    let pNaelon = Number((input[0]* 1.5)+ 2*1.5)
    let boq0 = Number(input[1]*14.5)
    let boq = (boq0 * 0.1) + boq0
    let razreditel = Number(input[2]*5)
    let chas = Number(input[3])

    let sum = pNaelon+boq+razreditel+0.4
    let maistor = chas*(0.3*sum)

    console.log(sum+maistor)
   
}
zad6(["10","11","4","8"])