const secondsHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    // console.log(seconds);
    const secondsDegree = ((seconds / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegree}deg)`
    
    const mins = now.getMinutes();
    // console.log(mins);
    const minsDegree = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegree}deg)`

    const hours = now.getHours();
    // console.log(mins);
    const hoursDegree = ((hours / 60) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegree}deg)`
}

setInterval(setDate,1000)