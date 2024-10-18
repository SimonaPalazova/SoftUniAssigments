function housePainting(input){
let x = Number(input[0])
let y = Number(input[1])
let h = Number(input[2])

let prednaStena = x*x - 1.2*2
let zadnaStena = x*x
let stanichni = 2 *(x*y - 1.5*1.5)

let zelenaboq = (prednaStena+zadnaStena+stanichni)/3.4

let pokriv = 2 *((x*h)/2)
let stanichniP = 2*(x*y)
let redboq = (stanichniP + pokriv)/4.3

console.log(zelenaboq.toFixed(2))
console.log(redboq.toFixed(2))
}

housePainting([6,
    10,
    5.2
    ])