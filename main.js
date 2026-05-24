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

console.log(5 == "5");
console.log(5 === "5");
console.log(0 == false);
console.log(0 === false);
console.log(null == undefined);
console.log(null === undefined);

let obj1 = { name: "John" };
let obj2 = { name: "John" };
console.log(obj1 == obj2);
console.log(obj1 === obj2);

let obj3 = obj1;
console.log(obj1 === obj3);

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 === arr2);


let yourAge = 18;
if (yourAge >= 18) {
    console.log("доступ разрешён");
} else {
    console.log("доступ запрещён");
}

// задание 1
let temperaturee = -5;
if (temperature < 0) {
    console.log("холодно");
} else if (temperature >= 0 && temperature <= 20) {
    console.log("прохладно");
} else {
    console.log("тепло");
}

let isStudent2 = true;
if (isStudent2 && age < 25) {
    console.log("доступна студенческая скидка");
}

// задание 2
let isLoggedIn = true;
let isAdmin = false;
if (isLoggedIn && isAdmin) {
    console.log("полный доступ");
} else if (isLoggedIn && !isAdmin) {
    console.log("ограниченный доступ");
} else {
    console.log("доступ запрещён");
}

// задание 3
let a3 = 10;
let b3 = "10";
console.log(a3 == b3);
console.log(a3 === b3);

let message = age >= 18 ? "совершеннолетний" : "несовершеннолетний";
console.log(message);

let day = 3;
switch (day) {
    case 1: console.log("понедельник"); break;
    case 2: console.log("вторник"); break;
    case 3: console.log("среда"); break;
    default: console.log("неизвестный день");
}

// задание 4
let monthNumber = 5;
switch (monthNumber) {
    case 1: console.log("январь"); break;
    case 2: console.log("февраль"); break;
    case 3: console.log("март"); break;
    case 4: console.log("апрель"); break;
    case 5: console.log("май"); break;
    case 6: console.log("июнь"); break;
    case 7: console.log("июль"); break;
    case 8: console.log("август"); break;
    case 9: console.log("сентябрь"); break;
    case 10: console.log("октябрь"); break;
    case 11: console.log("ноябрь"); break;
    case 12: console.log("декабрь"); break;
    default: console.log("неправильное значение");
}