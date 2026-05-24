console.log("Hello, JavaScript");
let age = 20;
let name = "denis";
let isStudent = true;
console.log("Name: ", name);
console.log("Age: ", age);
console.log("Is Student: ", isStudent);
let value = 10;
console.log(value);
value = "теперь это строка";
console.log(value);
value = true;
console.log(value);
// string
let userName = "Алексей";
console.log(`Привет, ${userName}!`);

// number
let price = 99.99;
let temperature = -15;
let infinity = 1 / 0;
let notANumber = 0 / 0;
console.log(0.1 + 0.2);

// bigInt
let bigNumber = 9007199254740991n;
let huge = BigInt("12345678901234567890123456789012345678901234567890");

// boolean
let isAlive = true;
let isWorking = false;
let isAdult = age >= 18;

// undefined
let x;
let y = undefined;

// null
let userData = null;

// symbol
let id = Symbol("id");

// object
let person = {
    name: "Станислав",
    age: 30,
    isStudent: false,
    sayHello: function () {
        console.log("Привет!");
    },
};
console.log(person.name);

// array
let fruits = ["яблоко", "банан", "апельсин"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["текст", 42, true, null];

// function
function sum(a, b) {
    return a + b;
}
let multiply = function (x, y) {
    return x * y;
};
console.log(sum(5, 3));

// date
let now = new Date();
let birthday = new Date("1995-12-17");

let a = 10;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(10 + "5");
console.log("10" - 5);

const PI = 3.14;
console.log(PI);

const numbersArray = [1, 2, 3];
numbersArray[0] = 10;
console.log(numbersArray);

const persons = { name: "denis", age: 18 };
persons.age = 50;
persons.city = "volgograd";
console.log(persons);

console.log(typeof "Текст");
console.log(typeof 42);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () {});

let numberX = null;
console.log(numberX === null);

let newPrice = 500;
console.log(newPrice, typeof newPrice);
newPrice = "дорого";
console.log(newPrice, typeof newPrice);

let num = 42;
let str = String(num);
let str2 = num.toString();
let str3 = "" + num;

let strNum = "123";
let int = Number(strNum);
let int2 = parseInt("42.5");
let float = parseFloat("3.14");
let int3 = +"99";

let bool1 = Boolean(1);
let bool2 = !!1;
let bool3 = Boolean(0);
let bool4 = Boolean("");

console.log("5" + 3);
console.log("5" - 3);
console.log("5" * "2");
console.log(true + 1);
console.log(false + 1);
console.log(null + 1);
console.log(undefined + 1);

// trap
console.log("5" + 3 + 2);