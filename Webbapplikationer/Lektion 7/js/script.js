// HOISTING

x = 12; // Tilldelar x ett värde
console.log(x); // 12
console.log(typeof x); // number

x = null; // Tilldelar x null
console.log(typeof x); // object

// SCOPE

if (true) {
  // Alltid true om inget annat anges.
  var variableVar = "This is a Var";
  let variableLet = "This is a Let";

  console.log(variableVar); // "This is a Var"
  console.log(variableLet); // "This is a Let"
}
console.log(variableVar); // "This is a Var"
// console.log(variableLet); // undefined

var x; // Deklarerar x

// FUNKTIONER

// Arrow function - "standard" utan indata
const greet = () => console.log("Hello");
greet();

// Arrow function - "standard" med indata
const addNumbers = (number) => {
  console.log(number + number);
};

// Enbart en parameter - behöver ingen parentes runt indata.
// const addNumbers = number => { console.log(number + number); }

// Endast en rad i body, behöver inga måsvingar.
// const addNumbers = number => console.log(number + number);

addNumbers(2); // 4

// ARRAYS

const arr = [1, 2, 3, 4, 5];
console.log(arr);

arr.pop(); // Tar bort det sista elementet i arrayn.
console.log(arr);

arr.push(6); // Lägger till ett element i slutet av arrayn.
console.log(arr);

arr.shift(); // Tar bort det första elementet i arrayn.
console.log(arr);

arr.unshift(9); // Lägger till ett element i början av arrayn.
console.log(arr);

let joined = arr.join(","); // Joinar arrayn till en sträng, placerar , mellan varja element.
console.log(joined);

const arr2 = [7, 9, 12];
const newArr = arr.concat(arr2); // Konkatinerar(kombinerar) två arrayer.
console.log(newArr);

// SPLICE

arr.splice(1, 2); // Tar bort 2 element från index 1. startindex, antal att ta bort.
console.log(arr);

arr.splice(2, 0, 4, 6); // Infogar nya värden i arrayn. startindex, antal att ta bort, nytt värde, nytt värde
console.log(arr);

arr.splice(2, 1, 89); // Tar bort ett element i arrayn. startindex, antal att ta bort, nytt värde
console.log(arr);

arr.splice(0, 1); // Tar bort det första elementet i arrayn. startindex, antal att ta bort.
console.log(arr);

// SLICE

const arr3 = arr.slice(2); // Skapar en ny array, med start vid valt index.
console.log(arr3);

const arr4 = arr.slice(1, 3); // Skapar en ny array, med startindex samt slutindex. (Inkluderar INTE slutindex)
console.log(arr4);

// DELETE

delete arr[2]; // Tar bort ett element i arrayn. REKOMMENDERAS INTE!
console.log(arr);

// SORT - Sorterar elementen som strängar.
arr.sort(); // Sorterar arrayn minst till störst (A-Ö).
console.log(arr);

arr.push(100);

// Sorterar efter faktiskt värde. (Minsta till största)
arr.sort(function (a, b) {
  return a - b;
});
console.log(arr);

// Sorterar efter faktiskt värde. (Största till minsta)
arr.sort(function (a, b) {
  return b - a;
});
console.log(arr);

// REVERSE
arr.reverse(); // Sorterar arrayn i omvänd ordning (Ö-A).
console.log(arr);

// FILTER
const names = ["Jim", "Arasto", "Leo", "Alexis"];
const filteredNames = names.filter((name) => name.length > 4); // Skapar en ny array, med alla element som matchar funktionen. (längd > 4)
console.log(filteredNames);

// names.filter((name) => {
//   name.length > 6;
//   console.log(name);
// });

// REDUCE
const nums = [1, 2, 3, 4, 5];
let sum = nums.reduce((a, b) => a + b); // Skapar en nytt värde, som är summan av alla element i arrayn.
console.log(sum);

// MAP
arr.map((item) => console.log(item)); // Skriver ut varje element i arrayn.

arr.forEach((item) => console.log(item)); // Skriver ut varje element i arrayn.

// STORAGE

// LocalStorage - Permanent lagring i webbläsaren.
// localStorage.setItem("name", "Jim"); // Skapar ett nytt element i localStorage.
// console.log(localStorage.getItem("name")); // Hämtar ett element i localStorage.
// localStorage.removeItem("name"); // Tar bort ett specifikt element i localStorage.
// localStorage.clear(); // Tar bort alla element i localStorage.

// SessionStorage - Temporär lagring i webbläsaren. (Försvinner när vi stänger ner webbläsaren.)
// sessionStorage.setItem("name", "Jim"); // Skapar ett nytt element i sessionStorage.
