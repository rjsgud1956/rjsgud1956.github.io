const clock = document.querySelector("#clock");

function getClock() {
    const now = new Date();
    const dDay = new Date("12/25/22");

    const difference = dDay - now;

    const differenceDay = String(Math.floor(difference / (1000 * 60 * 60 * 24)));
    const differenceHours = String(24 - 1 - now.getHours()).padStart(2, "0");
    const differenceMinutes = String(60 - now.getMinutes()).padStart(2, "0");
    const differenceSeconds = String(60 - now.getSeconds()).padStart(2, "0");

    clock.innerText = `${differenceDay}d ${differenceHours}h ${differenceMinutes}m ${differenceSeconds}s`;
}

getClock()
setInterval(getClock, 1000);