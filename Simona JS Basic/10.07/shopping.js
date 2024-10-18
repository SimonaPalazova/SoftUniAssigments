function shopping(input){
let budget = Number(input[0])
let cVideoCard = Number(input[1])
let VideoCard = 250*cVideoCard
let cProcesor = Number(input[2])
let RAM = (VideoCard * 0.1) * Number(input[3])
let Procesor = (VideoCard * 0.35) * cProcesor


let sum = VideoCard + Procesor + RAM


if(cVideoCard > cProcesor){
    let otsupka = 0.15 * sum
    sum = sum - otsupka
}

if(budget >= sum){
    console.log(`You have ${(budget - sum).toFixed(2)} leva left!`)
}else{
    console.log(`Not enough money! You need ${(sum - budget).toFixed(2)} leva more!`)
}

}

shopping