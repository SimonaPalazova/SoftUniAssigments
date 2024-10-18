function hotelRoom(input){
    let month = input[0];
    let numOvernightStay = Number(input[1]);
 
    let apartment = 0;
    let studio = 0;
    let total = 0;
    let total1 = 0;
 
    if(month === "May" || month === "October"){
        studio = numOvernightStay * 50;
        if (numOvernightStay > 7 && numOvernightStay < 14){
            studio = studio * 0.95;
        }else if (numOvernightStay > 14){
            studio = studio * 0.7;
        }
        apartment = numOvernightStay * 65;
        if(numOvernightStay > 14){
            apartment = apartment * 0.9;
        }
        
    }else if(month === "June" || month === "September"){
        studio = numOvernightStay * 75.20;
        if(numOvernightStay > 14 ){
            studio = studio * 0.8;
        }
        apartment = numOvernightStay * 68.70;
        if(numOvernightStay > 14){
            apartment = apartment * 0.9;
        }
    }else if(month === "July" || month === "August"){
        studio = numOvernightStay * 76;
        apartment = numOvernightStay * 77;
        if(numOvernightStay > 14){
            apartment = apartment * 0.9;
        }
    }
        total = studio;
        total1 = apartment;
    console.log(`Apartment: ${total1.toFixed(2)} lv.`)
    console.log(`Studio: ${total.toFixed(2)} lv.`)
    
}
 