

// 1
function hello() {
    console.log("Hello World");
  }
  hello();
  
  // 2
  function welcome(name) {
    console.log("Welcome " + name);
  }
  welcome("Satish");
  
  // 3
  function add(a, b) {
    return a + b;
  }
  console.log(add(5, 3));
  
  // 4
  function evenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
  }
  console.log(evenOdd(7));
  
  // 5
  function square(num) {
    return num * num;
  }
  console.log(square(4));
  
  // 6
  function largest(a, b, c) {
    return Math.max(a, b, c);
  }
  console.log(largest(10, 25, 15));
  
  // 7
  function showAge(age = 18) {
    console.log(age);
  }
  showAge();
  showAge(25);
  
  // 8
  function fullName(first, last) {
    return first + " " + last;
  }
  console.log(fullName("Satish", "b"));
  
  

  
  // 9
  function multiply(a, b, c) {
    return a * b * c;
  }
  console.log(multiply(2, 3, 4));
  
  // 10
  function scopeDemo() {
    var x = 10;
    let y = 20;
    const z = 30;
    console.log(x, y, z);
  }
  scopeDemo();
  
  // 11
  function outer() {
    function inner() {
      console.log("Inner function");
    }
    inner();
  }
  outer();
  
  // 12
  var globalVar = "I am global";
  function testGlobal() {
    console.log(globalVar);
  }
  testGlobal();
  
  // 13
  {
    let blockVar = 100;
  }
  // console.log(blockVar); // Error
  
  // 14
  console.log(a); // undefined 
  var a = 5;
  
  // console.log(b); // Error
  let b = 10;
  

  
  // 15
  let anon = function() {
    console.log("Anonymous function");
  };
  anon();
  
  // 16
  const arrowFunc = () => {
    console.log("Arrow function");
  };
  arrowFunc();
  
  // 17
  const sum = (a, b) => a + b;
  console.log(sum(2, 3));
  
  // 18
  const expr = function() {
    console.log("Function Expression");
  };
  expr();
  
  // 19
  const obj = {
    value: 10,
    normal: function() {
      console.log(this.value);
    },
    arrow: () => {
      console.log(this.value);
    }
  };
  obj.normal(); // 10
  obj.arrow();  // undefined
  
  // 20
  (function() {
    console.log("Executed immediately");
  })();
  
  
  // 21
  function greetUser(callback) {
    callback();
  }
  greetUser(() => console.log("Hello from callback"));
  
  // 22
  function calculator(a, b, operation) {
    return operation(a, b);
  }
  console.log(calculator(5, 3, (a, b) => a + b));
  console.log(calculator(5, 3, (a, b) => a - b));
  console.log(calculator(5, 3, (a, b) => a * b));
  
  // 23
  function message(fn) {
    fn("Welcome User");
  }
  message(msg => console.log(msg));
  
  // 24
  function delay(callback) {
    setTimeout(callback, 2000);
  }
  delay(() => console.log("Delayed execution"));
  
  // 25
  function customMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }
    return result;
  }
  console.log(customMap([1,2,3], x => x * 2));
  
  
  
  // 26
  function addCurry(a) {
    return function(b) {
      return function(c) {
        return a + b + c;
      };
    };
  }
  console.log(addCurry(1)(2)(3));
  
  // 27
  const multiplyCurry = a => b => c => a * b * c;
  console.log(multiplyCurry(2)(3)(4));
  
  // 28
  const greet = a => b => c => `${a} ${b} ${c}`;
  console.log(greet("Hello")("John")("Good Morning"));
  
  
  // 29
  function* genMsg() {
    yield "Hi";
    yield "Hello";
    yield "Bye";
  }
  const g = genMsg();
  console.log(g.next().value);
  console.log(g.next().value);
  console.log(g.next().value);
  
  // 30
  for (let val of genMsg()) {
    console.log(val);
  }
  
  // 31
  function* infinite() {
    let i = 1;
    while (true) {
      yield i++;
    }
  }
  const inf = infinite();
  console.log(inf.next().value);
  console.log(inf.next().value);
  
  
  // 32
  let arr1 = [1,2];
  let arr2 = [3,4];
  console.log([...arr1, ...arr2]);
  
  // 33
  let obj1 = {name: "Satish", age: 22};
  let obj2 = {...obj1, age: 25};
  console.log(obj2);
  
  // 34
  console.log([...arr1, ...arr2, 5, 6]);
  
  
  // 35
  function sumAll(...nums) {
    return nums.reduce((a,b) => a+b, 0);
  }
  console.log(sumAll(1,2,3,4));
  
  // 36
  function showArgs(...args) {
    console.log(args);
  }
  showArgs(10,20,30);
  
  // 37
  function maxVal(...nums) {
    return Math.max(...nums);
  }
  console.log(maxVal(5,9,2,11));
  
  
  // 38
  function dayName(day) {
    switch(day) {
      case 1: console.log("Monday"); break;
      case 2: console.log("Tuesday"); break;
      case 3: console.log("Wednesday"); break;
      case 4: console.log("Thursday"); break;
      case 5: console.log("Friday"); break;
      case 6: console.log("Saturday"); break;
      case 7: console.log("Sunday"); break;
      default: console.log("Invalid");
    }
  }
  dayName(3);
  
  // 39
  function calc(a, b, op) {
    switch(op) {
      case "+": return a + b;
      case "-": return a - b;
      case "*": return a * b;
      case "/": return a / b;
      default: return "Invalid";
    }
  }
  console.log(calc(10, 5, "+"));
  
  // 40
  function grade(marks) {
    if (marks >= 90) return "A";
    else if (marks >= 75) return "B";
    else if (marks >= 50) return "C";
    else return "Fail";
  }
  console.log(grade(82));