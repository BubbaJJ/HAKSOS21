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
