function printMeetings(input){

    let meetings = {}

    for (const entry of input) {
        let [day, name] = entry.split(' ');

        if(meetings[day]){
            console.log(`Conflict on ${day}!`);
        }else{
            meetings[day] = name;

           console.log(`Scheduled for ${day}`); 
        }
    }
     
    for (const day in meetings) {
        console.log(`${day} -> ${meetings[day]}`);
    }
}
printMeetings(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'])