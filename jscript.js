// ---------------- DATATYPES ----------------

// Task 1
let name = "Naveen";
console.log("Task1:", name);

// Task 2
console.log("Task2:", typeof "JavaScript");

// Task 3
let age = 22;
console.log("Task3:", typeof age);

// Task 4
let isStudent = true;
console.log("Task4:", typeof isStudent);

// Task 5
let salary;
console.log("Task5:", salary);


// ---------------- ARRAY TASKS ----------------

// Task 6
let fruits = ["Apple","Banana","Mango","Orange","Grapes"];
console.log("Task6:", fruits);

// Task 7
console.log("Task7:", fruits[0]);

// Task 8
console.log("Task8:", fruits[2]);

// Task 9
console.log("Task9:", fruits[fruits.length-1]);

// Task 10
let numbers = [10,20,30,40,50];
console.log("Task10:", numbers[1], numbers[3]);


// ---------------- OBJECT TASKS ----------------

// Task 11
let person = {
name: "Naveen",
age: 22,
city: "Hyderabad"
};
console.log("Task11:", person);

// Task 12
console.log("Task12:", person.name);

// Task 13
person.skills = ["HTML","CSS","JS"];
console.log("Task13:", person.skills[1]);

// Task 14
let carDetails = {
brand: "Toyota",
model: "Innova",
price: 2000000
};
console.log("Task14:", carDetails.brand);

// Task 15
let fruitCategory = {
red: ["apple","cherry"],
yellow: ["banana","mango"],
green: ["kiwi","grapes"]
};
console.log("Task15:", fruitCategory.yellow[0]);


// ---------------- ARITHMETIC OPERATORS ----------------

let a = 8;
let b = 4;

// Task 16
console.log("Task16:", a + b);

// Task 17
console.log("Task17:", a - b);

// Task 18
console.log("Task18:", a * b);

// Task 19
console.log("Task19:", a / b);

// Task 20
console.log("Task20:", a % b);


// ---------------- EXPONENTIAL ----------------

// Task 21
console.log("Task21:", 3 ** 2);

// Task 22
console.log("Task22:", 2 ** 4);


// ---------------- INCREMENT / DECREMENT ----------------

// Task 23
let num = 5;
num++;
console.log("Task23:", num);

// Task 24
num = 10;
num--;
console.log("Task24:", num);

// Task 25
let x = 6;
let y = x++;
console.log("Task25: x =", x, "y =", y);

// Task 26
a = 4;
let c = ++a;
console.log("Task26: a =", a, "c =", c);


// ---------------- ASSIGNMENT OPERATORS ----------------

// Task 27
let value = 10;
value += 5;
console.log("Task27:", value);

// Task 28
value = 20;
value -= 3;
console.log("Task28:", value);

// Task 29
value = 6;
value *= 2;
console.log("Task29:", value);

// Task 30
value = 20;
value %= 3;
console.log("Task30:", value);


// ---------------- COMPARISON OPERATORS ----------------

// Task 31
console.log("Task31:", 10 == "10");

// Task 32
console.log("Task32:", 10 === "10");

// Task 33
console.log("Task33:", 15 > 20);

// Task 34
console.log("Task34:", 5 <= 5);


// ---------------- LOGICAL OPERATORS ----------------

// Task 35
console.log("Task35:", 10 > 5 && 5 > 2);

// Task 36
console.log("Task36:", 10 < 5 || 8 > 2);

// Task 37
console.log("Task37:", !(5 === "5"));


// ---------------- TERNARY OPERATOR ----------------

// Task 38
age = 20;
console.log("Task38:", age >= 18 ? "Adult" : "Minor");

// Task 39
let password = 1;
console.log("Task39:", password === 1 ? "Login success" : "Wrong password");


// ---------------- STRING OPERATIONS ----------------

// Task 40
let firstName = "Spider";
let lastName = "Man";

console.log("Task40 Concatenation:", firstName + " " + lastName);
console.log("Task40 Template:", `${firstName} ${lastName}`);