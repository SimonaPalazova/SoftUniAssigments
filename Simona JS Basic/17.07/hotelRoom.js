function hotelRoom(input){
    let month = input[0]
    let days = Number(input[1])
    let sleep = days - 1;

    let studio = 0;
    let apartment = 0
    let resStudio = 0
    let resApartment = 0;


    if(month === "May" || month === "October"){
        studio = 50;
        apartment = 65;
        if(sleep >= 7 && sleep < 14){
            studio *= 0.95;
            resStudio = studio*days;
            resApartment = apartment * days;
        }else if(sleep >= 14){
            studio *= 0.7;
            resStudio = studio * days;
            apartment *= 0.9;
            resApartment = apartment * days;
        }
        else{
            resStudio = studio * days
            resApartment = apartment*days
        }
    }else if(month === "June" || month === "September"){
        studio = 75.20;
        apartment = 68.70;
        if(sleep > 14){
            studio *= 0.8;
            resStudio = studio *days;
            apartment *= 0.9;
            resApartment = apartment * days;
        }else{
            resStudio = studio * days;
            resApartment = apartment * days;
        }
    }else{
        studio = 76;
        apartment = 77;
        if(sleep > 14){
            apartment *= 0.9;
            resApartment = apartment * days
            resStudio = studio *days
        }else{
            resApartment = apartment * days;
            resStudio = studio *days;
        }
    }
    console.log(`Apartment: ${resApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${resStudio.toFixed(2)} lv.`)
}
hotelRoom(["May",

"15"])