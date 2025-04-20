const hourHand=document.querySelector(".hour-hand");
const minuteHand=document.querySelector(".minute-hand");
const secondHand=document.querySelector(".second-hand");
//Date obj created
function setDate(){
    const now= new Date();    
    return now;
}
//Analog code
function setanalogDate(){
    const now = setDate();
    const seconds=now.getSeconds();
    const minutes=now.getMinutes();
    const hours=now.getHours(); 
    
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
//function calling setanalogdate after 1 sec
setInterval(setanalogDate,1000);

//Digital code
function setdigitaldate(){
    const now = setDate();
    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds(); 
    let am_pm = "AM";
    // Setting time for 12 Hrs format
    if (hours >= 12) {
        if (hours > 12) hours -= 12;
        am_pm = "PM";
    } else if (hours == 0) {
        hours = 12;
        am_pm = "AM";
    }
    //Add 0 if digit is less than 10
    hours=hours<10?"0"+hours:hours;
    minutes=minutes<10?"0"+minutes:minutes;
    seconds=seconds<10?"0"+seconds:seconds;

    let currentTime = hours +":"+ minutes +":"+ seconds +" " +am_pm;

    // Displaying the time
    document.querySelector(".digital-clock").innerHTML = currentTime;
}
setInterval(setdigitaldate,1000);

