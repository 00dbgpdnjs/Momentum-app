const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date(); // new Date : object
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    clock.innerText = (`${hours}:${minutes}`);
}

getClock()
setInterval(getClock, 1000); // Call the func every 1 sec


// More Detailed Clock (+Second)

// function getClock() {
//     const date = new Date(); // new Date : object
//     const hours = String(date.getHours()).padStart(2, "0");
//     const minutes = String(date.getMinutes()).padStart(2, "0");
//     const seconds = String(date.getSeconds()).padStart(2, "0");
//     clock.innerText = (`${hours}:${minutes}:${seconds}`);
// }