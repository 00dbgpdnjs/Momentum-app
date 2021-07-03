const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

// localStorage can save only text ,not array
// JSON.stringify( object ): Object becomes string
function saveToDos() {
    // localStorage.setItem("todos", toDos);
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    // console.log("lala");
    // console.log(event);
    // console.log(event.target);
    // console.dir(event.target);
    // console.dir(event.target.parentElement);
    // console.dir(event.target.parentElement.innerText);
    // console.log(event.target.parentElement);
    const li = event.target.parentElement;
    // console.log(li.id);
    // console.log(typeof(li.id)); // string
    li.remove();
    // whenever clicked delete button, local storage isn't updated. So if refreshed the app, lists still remain. So two codes below are needed
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // refer 'filter()' below
    saveToDos();
}

// filter()
// const arr = ["pizza", "banana", "tomato"]
// function sexyFilter(food){ return food !== "banana"}
// console.log(arr.filter(sexyFilter)); // ["pizza", "tamato"]

function paintToDo(newTodo) {
    // console.log("I will paint", newTodo);
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const input = document.createElement("input");
    input.type = "checkbox";
    input.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(input);
    // console.log(li);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    // console.log(toDoInput.value);
    toDoInput.value = ""; // Not be gone but the value become em space
    // console.log(newTodo, toDoInput.value); // Check what's the difference between both
    const newTodoObj = { // newTodo is just text
        text: newTodo,
        id: Date.now(), // a like random number
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos); // sting

// JSON.parse( string ): string becomes array
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    // console.log(parsedToDos); // array
    toDos = parsedToDos; // Update the var  to restore  cause whenever refreshed the app, toDos array is empty
    // parsedToDos.forEach( func ) // If you prefer this code instead of the code below, you need to define the func  separately.
    // parsedToDos.forEach((item) => console.log("this is the turn of", item));
    parsedToDos.forEach(paintToDo);
}