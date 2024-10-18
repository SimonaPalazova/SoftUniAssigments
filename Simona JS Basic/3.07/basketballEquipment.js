function basketballEquipment(input){
 let taksa = Number(input[0])
 let kecowe = taksa - (taksa * 0.4)
 let ekip = kecowe - (kecowe*0.2) 
 let topka = ekip/4
 let aksesoari = topka/5
 let sum = taksa + kecowe + ekip + topka + aksesoari

 console.log(sum)
}
basketballEquipment(["365"])