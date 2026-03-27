
let input1 = " naveen kumar ";
let output1 = input1.trim().toUpperCase().replaceAll(" ", "_");
console.log("Task 1:", output1);


let email = "test@gmail.com";
let output2 = (email.includes("@") && email.endsWith(".com"))
    ? "Valid Email" : "Invalid Email";
console.log("Task 2:", output2);



let sentence = "javascript is very powerful language";
let output3 = sentence.split(" ").length;
console.log("Task 3:", output3);


let str4 = "python python developer";
let arr = str4.split(" ");
arr[1] = "javascript";
let output4 = arr.join(" ");
console.log("Task 4:", output4);



let password = "Test1234";
let isStrong = password.length >= 8 &&
               /[A-Z]/.test(password) &&
               /[a-z]/.test(password) &&
               /[0-9]/.test(password);

console.log("Task 5:", isStrong ? "Strong" : "Weak");



let str6 = "hello";
let output6 = str6.split("").reverse().join("");
console.log("Task 6:", output6);


let year = 2000, month = 5, day = 15;

if (month >= 1 && month <= 12 && day >= 1 && day <= 31) {
    let date = new Date(year, month - 1, day);
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    console.log("Task 7: You were born on", days[date.getDay()]);
} else {
    console.log("Task 7: Invalid Date");
}


setInterval(() => {
    console.log("Task 8:", new Date().toLocaleTimeString());
}, 1000);


let d1 = new Date("2024-01-01");
let d2 = new Date("2024-01-10");

let diffDays = Math.abs(d2 - d1) / (1000 * 60 * 60 * 24);
console.log("Task 9:", diffDays, "days");

let str10 = "javascript";
let freq = {};

for (let ch of str10) {
    freq[ch] = (freq[ch] || 0) + 1;
}

console.log("Task 10:", JSON.stringify(freq));