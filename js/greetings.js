const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// Getting Username and Saving Username
function onLoginSubmit(event) {
    // console.log("click!");
    // console.log(loginInput.value);
    event.preventDefault(); // Prevent default behavior(being refreshed the website) of form tag
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    // console.log(username);
    paintGreetings(username)
}

function paintGreetings(username) {
    // greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello, ${username}`; // another rule above : ` string ${ variable } string~~`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// Loading Username
// Before showing form if there is a username information in local storage, not showing form but h1
const savedUsername = localStorage.getItem(USERNAME_KEY);

// console.log(savedUsername) // username or null

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername)
}