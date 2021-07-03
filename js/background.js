const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// console.log(chosenImage);

// Create img tag of html in js
const bgImage = document.createElement("img"); 

bgImage.src = `img/${chosenImage}`;

// console.log(bgImage);

// appendChild : Append bgImage at the bottom of body 
// <-> prepend : Add it at the top of body
document.body.appendChild(bgImage);