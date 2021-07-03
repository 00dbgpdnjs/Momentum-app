const API_KEY = "ebc5435b2440165b027d41abe4a284c7"

function onGeoOk(position) {
    // console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // console.log("You live in", lat, lon);
    // The url below : Call API about 'By geographic coordinates'
    // https:// form!!!
    // units : It's parameter of the API. Fahrenheit -> Celsius
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    // console.log(url); // (Click the url)
    // refer to fetch.txt
    fetch(url).then(response => response.json()).then((data) => {
        // console.log(data.name, data.weather[0].main);
        const weather = document.querySelector("#weather span:First-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = `Location : ${data.name}`;
        // weather.innerText = data.weather[0].main;
        weather.innerText = `Weather : ${data.weather[0].main}`; // temp: data.main.temp
    })
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);