// Query selectors
hoursClockHand=document.querySelector("#hour");
minutesClockHand=document.querySelector("#minute");
secondsClockHand=document.querySelector("#second");

// Get local hour
date=new Date();
currentHour=date.getHours();
currentMinutes=date.getMinutes();
currentSeconds=date.getSeconds();

// Position clock hands
let hrPosition=(currentHour*360/12)+(currentMinutes*(360/60)/12);
let minPosition=(currentMinutes*360/60)+(currentSeconds*(360/60)/60);
let secPosition=(currentSeconds*360/60);

// Move clock hands
function runClock(){
    hrPosition=hrPosition+(3/360);
    minPosition=minPosition+(6/60);
    secPosition=secPosition+6;
    hoursClockHand.style.transform="rotate(" + hrPosition + "deg)";
    minutesClockHand.style.transform="rotate(" + minPosition + "deg)";
    secondsClockHand.style.transform="rotate(" + secPosition + "deg)";
}

// Execute function every 1000ms = 1s
interval=setInterval(runClock,1000);
