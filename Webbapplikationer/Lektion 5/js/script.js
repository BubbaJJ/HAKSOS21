// alert("Script loaded!");

let x = 12;

console.log(typeof x); // Skriver ut number

var y = null;
console.log(y); // Skriver ut null
console.log(typeof y); // Skriver ut object

y = 5;
console.log(y); // Skriver ut 5
console.log(typeof y); // Skriver ut number

1 == "1"; // Skriver ut true
1 === "1"; // Skriver ut false

1 == 1; // Skriver ut true
1 === 1; // Skriver ut true

false == []; // Skriver ut true
false === []; // Skriver ut false

0 == []; // Skriver ut true
0 === []; // Skriver ut false

// Ternary operator
var z = y === 6 ? 3 : 1;
console.log(z); // Skriver ut 0

let arr = [1, 2, 3, , 4, 5];

console.log("for (let i = 0; i < arr.length; i++)");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("for (let i in arr)");
for (let i in arr) {
  console.log(arr[i]);
}

console.log("for (let i of arr)");
for (let i of arr) {
  console.log(i);
}

console.log("arr.forEach((elem) => console.log(elem))");
arr.forEach((elem) => console.log(elem));

console.log("arr.forEach((elem, i) => console.log(elem, i))");
arr.forEach((elem, i) => console.log(elem, i));

function greet(name) {
  return `Hello, ${name}!`;
}
let message = greet("Jim");
console.log(message);

const greeting = (name) => `Hello, ${name}!`;
const greetingMessage = greeting("Jim");
console.log(greetingMessage);

let f = function () {
  return "Hello!";
};

console.log(f());

function buttonAlert() {
  alert("Button clicked!");
}

var counter = 0;

function countUp() {
  if (counter < 10) {
    counter++;
  } else {
    alert("Counter is at max value!");
  }
}

function countDown() {
  if (counter > 0) {
    counter--;
  } else {
    alert("Counter is at min value!");
  }
}

function showCount() {
  alert(counter);
}

const user = {
  name: "Jim",
  age: 33,
  teach: (className) => `I am teaching ${className}`,
};

console.log(user);
console.log(user.name);
console.log(user["name"]);
console.log(user.teach("JavaScript"));

user.name = "John";
user["age"] = 34;

console.log(user.name);
console.log(user.age);

class User {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const newUser = new User("Jim", 33);

console.log(newUser);

// Hämtar alla button element
const tags = document.getElementsByTagName("button");
console.log(tags);

// Hämtar första elementet med class="newColor"
const selector = document.querySelector(".newColor");
console.log(selector);

// Hämtar alla element med class="newColor"
const selectors = document.querySelectorAll(".newColor");
console.log(selectors);

// Hämtar första elementet med id="btnCountUp"
const btnCountUp = document.querySelector("#btnCountUp");
console.log(btnCountUp);

// Hämtar närmsta föräldern
// const parent = document.querySelector(".newColor").parentElement;
const parent = selector.parentElement;
console.log(parent);

// Hämtar alla "barn"
const children = document.querySelector("#main").children;
console.log(children);

// Hämtar närmsta föräldern, som matcher ett villkor.
const p = btnCountUp.closest("#div-3");
console.log(p);

// Hämtar efterföljande element, på samma nivå.
const next = document.querySelector(".newColor").nextElementSibling;
console.log(next);

// Hämtar föregående element, på samma nivå.
const previous = document.querySelector(".newColor").previousElementSibling;
console.log(previous);

// Infogar och skriver över i element som har id="innerHTML".
document.querySelector("#innerHTML").innerHTML =
  "<h1>Hello!</h1><p class='newColor'> World!</p><a href='https://github.com'>GitHub</a>";

const getattr = document.querySelector(".newColor").getAttribute("id");
console.log(getattr);

document.querySelector(".newColor").setAttribute("id", "newId");

document.querySelector(".newColor").classList.add("btn");

let classes = document.querySelector(".newColor").classList;
console.log(classes);

document.querySelector(".newColor").classList.remove("btn");
classes = document.querySelector(".newColor").classList;
console.log(classes);

// const colors = document.querySelectorAll(".newColor");
// colors.forEach((child) => child.classList.add("btn"));

function testFunction(name) {
  console.log(`Test function! ${name}`);
}

// document
//   .querySelector(".newColor")
//   .setAttribute("onclick", `testFunction(${i})`);
const c = document.querySelectorAll(".newColor");
c.forEach((child, i) => child.setAttribute("onclick", `testFunction(${i})`));

document.querySelector(".newColor").classList.toggle("btn");
// document.querySelector(".newColor").classList.toggle("btn");
// document.querySelector(".newColor").classList.toggle("btn");

let username = prompt("Enter your name: ");
alert("Welcome, " + username);
