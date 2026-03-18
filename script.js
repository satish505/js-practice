// 1
let num1 = Number(prompt("Enter a number:"));
console.log(num1 + 10);

// 2
let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
console.log(a + b);

// 3
let val = prompt("Enter any value:");
console.log(Boolean(val));

// 4
console.log(Number("123") * 5);

// 5
console.log(Number(true));  // 1
console.log(Number(false)); // 0

// 6
let str = prompt("Enter string:");
console.log(Boolean(str));

// 7
console.log(Number("100") - Number("50"));

// 8
console.log(Number(null));      // 0
console.log(Number(undefined)); // NaN
console.log(Number(""));        // 0

// 9
console.log("10" + 20); 
// "1020" → string + number = string concatenation

// 10
let n = Number("25");
console.log(n > 20);
// 11
let age = Number(prompt("Enter age:"));
if (age >= 18) console.log("Eligible to vote");
else console.log("Not eligible");

// 12
let num = Number(prompt("Enter number:"));
if (num >= 0) console.log("Positive");
else console.log("Negative");

// 13
if (num % 2 === 0) console.log("Even");
else console.log("Odd");

// 14
let x = Number(prompt("Enter num1:"));
let y = Number(prompt("Enter num2:"));
let z = Number(prompt("Enter num3:"));
console.log(Math.max(x, y, z));

// 15
let temp = Number(prompt("Enter temperature:"));
if (temp > 35) console.log("Hot day");
else if (temp < 20) console.log("Cold day");
else console.log("Normal weather");

// 16
let marks = Number(prompt("Enter marks:"));
if (marks >= 35) console.log("Pass");
else console.log("Fail");

// 17
let user = prompt("Enter username:");
let pass = prompt("Enter password:");
if (user === "admin" && pass === "1234")
    console.log("Login success");
else
    console.log("Invalid");

// 18
let year = Number(prompt("Enter year:"));
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
    console.log("Leap year");
else
    console.log("Not leap year");

// 19
let time = Number(prompt("Enter time (0–24):"));
if (time < 12) console.log("Morning");
else if (time < 17) console.log("Afternoon");
else if (time < 21) console.log("Evening");
else console.log("Night");

// 20
let salary = Number(prompt("Enter salary:"));
if (salary >= 50000) console.log(salary * 0.2);
else if (salary >= 30000) console.log(salary * 0.1);
else console.log("No tax");
// 21
for (let i = 1; i <= 10; i++) console.log(i);

// 22
for (let i = 10; i >= 1; i--) console.log(i);

// 23
for (let i = 1; i <= 50; i++)
    if (i % 2 === 0) console.log(i);

// 24
for (let i = 1; i <= 50; i++)
    if (i % 2 !== 0) console.log(i);

// 25
let t = Number(prompt("Enter table number:"));
for (let i = 1; i <= 10; i++)
    console.log(t + " x " + i + " = " + (t * i));

// 26
let sum = 0;
for (let i = 1; i <= 100; i++) sum += i;
console.log(sum);

// 27
let fact = 1;
let f = Number(prompt("Enter number:"));
for (let i = 1; i <= f; i++) fact *= i;
console.log(fact);

// 28
let count = 0;
for (let i = 1; i <= 100; i++)
    if (i % 5 === 0) count++;
console.log(count);

// 29
for (let i = 1; i <= 10; i++)
    console.log(i * i);

// 30
let rev = 0;
let numr = Number(prompt("Enter number:"));
while (numr > 0) {
    let digit = numr % 10;
    rev = rev * 10 + digit;
    numr = Math.floor(numr / 10);
}
console.log(rev);
let arr = ["apple", "banana", "orange"];

// 31
for (let item of arr) console.log(item);

// 32
console.log(arr.length);

// 33
let nums = [10, 5, 20, 8];
console.log(Math.max(...nums));

// 34
let total = 0;
for (let n of nums) total += n;
console.log(total);

// 35
let arr2 = [2, 5, 8, 11, 20];
for (let n of arr2)
    if (n % 2 === 0) console.log(n);
    let obj = {
        name: "John",
        age: 25,
        city: "Chennai"
    };
    
    // 36
    for (let key in obj)
        console.log(key, obj[key]);
    
    // 37
    console.log(Object.keys(obj).length);
    
    // 38
    console.log("salary" in obj);
    
    // 39
    for (let key in obj)
        console.log(obj[key]);
    
    // 40
    let emp = {
        name: "Satiah",
        role: "Developer",
        salary: 30000,
        department: "IT"
    };
    console.log(emp);
     