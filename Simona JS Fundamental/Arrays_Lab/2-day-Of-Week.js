function solve(day) {
    let daysOfWeek = ["Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"]
        if(day > 7 || day < 0){
            console.log("Invalid day!");
        }else{
            console.log(daysOfWeek[day-1]);
        }
}
solve(3)