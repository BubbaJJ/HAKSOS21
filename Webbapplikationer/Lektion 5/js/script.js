// alert("Script loaded!");

prompt("Enter your name:");

const person = {
  name: "John",
  age: 30,
};

console.log(person.name);
console.log(person["name"]);
console.log(person[0]);

// DATATYPER
let x = 12;

console.log(typeof x); // Skriver ut number

var y = null;
console.log(y); // Skriver ut null
console.log(typeof y); // Skriver ut object

y = 5;
console.log(y); // Skriver ut 5
console.log(typeof y); // Skriver ut number

// JÄMFÖRELSEOPERATORER
1 == "1"; // Skriver ut true    (Samma värde)
1 === "1"; // Skriver ut false  (Samma värde, olika datatyper)

1 == 1; // Skriver ut true      (samma värde)
1 === 1; // Skriver ut true     (samma värde, samma datatyp)

false == []; // Skriver ut true
false === []; // Skriver ut false

0 == []; // Skriver ut true
0 === []; // Skriver ut false

// Ternary operator
// var z = (villkor) ? (om sant) : (om falskt);
var z = y === 6 ? 3 : 0;
console.log(z); // Skriver ut 0

if (y === 6) {
  var z = 3;
} else {
  var z = 0;
}

// LOOPAR
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

// FUNKTIONER
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

// OBJEKT
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

// KLASSER
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

// let username = prompt("Enter your name: ");
// alert("Welcome, " + username);

// Alla children till main
const mainChildren = document.querySelector(":not(div) p");
console.log(mainChildren);

// Hämta elementet som kommer innan, på samma nivå.
const prev = document.querySelector("button").previousElementSibling;
console.log(prev);

// Hämta elementet som kommer efter, på samma nivå.
const nextS = document.querySelector("button");
console.log(nextS.nextElementSibling);

// Hämta alla element som inte är div, p eller a
const all = document.querySelectorAll(":not(div, p, a, title)");
console.log(all);

// Hämtar alla h2-element som har header som förälder.
const inParent = document.querySelectorAll("header > h2");
console.log(inParent);

// Hämtar alla div-element som är placerade direkt efter ett h2-element.
const divsAfterH2 = document.querySelectorAll("h2+div");
console.log(divsAfterH2);

// Hämtar alla div-element som är placerade direkt efter ett h2-element. med samma förälder.
const p2 = document.querySelectorAll("div~h2");
console.log(p2);

// Hämtar alla div-element som är placerade direkt efter ett h2-element. med samma förälder.
const p3 = document.querySelectorAll("div, h2");
console.log(p2);

// Hämtar alla div-element som är placerade direkt efter ett h2-element. med samma förälder.
const p4 = document.querySelectorAll("div h2");
console.log(p2);

// Hämta alla button-element med namnet showCountBtn
const showCountBtn = document.querySelectorAll("[name='showCountBtn']");
console.log(showCountBtn);

// Reagerar när användaren trycker på knappen med id alertBtn.
// document.querySelector("#alertBtn").addEventListener("click", buttonAlert);

// Reagerar när användaren trycker på knappen med id alertBtn.
// document.querySelector("#alertBtn").addEventListener("mouseleave", () => {
//   alert("button pushed!");
// });

// const alertBtn = document.querySelector("#alertBtn");
// alertBtn.addEventListener("click", buttonAlert);

// document.addEventListener("click", function (event) {
//   if (event.target.classList.contains("btn")) {
//     console.log("button clicked");
//   }
// });

// Kör funktionen buttonAlert när användaren trycker på valfri button.
$("button").click(buttonAlert);

// Kör funktionen buttonAlert när användaren trycker på valfri button med id btnCountUp.
$("button#btnCountUp").click(buttonAlert);

// Kör koden efter att sidan laddats klart.
// $(document).ready(function () {
//   alert("Page loaded!");
// });

// ALTERNATIV SYNTAX FÖR DOCUMENT.READY
// $(function () {
//   alert("Page loaded!");
// });

// Flera eventListeners
$("p").on({
  click: function () {
    $(this).css("background-color", "red");
  },
  mouseenter: function () {
    $(this).css("background-color", "green");
  },
  mouseleave: function () {
    $(this).css("background-color", "white");
  },
});

$("btn").clock(function () {});

document.querySelector("#navbar");

6 > "5";
