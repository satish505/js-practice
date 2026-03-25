
console.log("SPREAD & REST");

// merge
let a = [10,20];
let b = [30,40];
console.log([...a,...b,50]);

// clone
let original = [1,2,3];
let copy = [...original];
copy.push(4);
console.log(original);
console.log(copy);

// object merge
let o1 = {salary:2000};
let o2 = {salary:5000};
console.log({...o1,...o2});

// rest sum
function sum(...n){
  let total=0;
  for(let i of n){
    total+=i;
  }
  console.log(total);
}
sum(1,2,3,4);

// rest values
function show(a,b,...rest){
  console.log(rest);
}
show(1,2,3,4,5);



console.log("DESTRUCTURING");

let arr=[5,10,15,20];
let [first,,,last]=arr;
console.log(first,last);

// swap
let x=10,y=20;
[x,y]=[y,x];
console.log(x,y);

// nested
let [, [, [, [val]]]]=[1,[2,[3,[4]]]];
console.log(val);

// rename
let {name:userName}={name:"John",age:25};
console.log(userName);

// default
let {city="Hyderabad"}={};
console.log(city);



console.log("BASIC ARRAY");

let num=[1,2,3,4,5];
num.push(6,7);
console.log(num);

let lastVal=num.pop();
console.log(lastVal);

num.shift();
console.log(num);

num.unshift(0);
console.log(num);

num=[1,2,3,4,5,6];
num.splice(2,2);
console.log(num);


console.log("SLICE");

let sal=[1000,2000,3000,4000,5000,6000];
console.log(sal.slice(3));

let n=[1,2,3,4,5];
n.splice(1,2,9,9);
console.log(n);

console.log([1,[2,[3,[4]]]].flat(Infinity));
console.log([1,[2,[3]]].flat());

n.splice(2,0,100);
console.log(n);


console.log("SEARCH");

console.log([10,20,100].includes(100));
console.log([1,2,3,4,3].indexOf(3,2));
console.log([1,5,3,5,2].lastIndexOf(5));

console.log([1,2,3].every(n=>n>0));
console.log([10,20,60].some(n=>n>50));


console.log("SORT");

let s=[10,5,100,1];
s.sort((a,b)=>a-b);
console.log(s);

s.sort((a,b)=>b-a);
console.log(s);

let emp=[
  {name:"A",salary:3000},
  {name:"B",salary:1000}
];
emp.sort((a,b)=>a.salary-b.salary);
console.log(emp);

s.reverse();
console.log(s);

console.log([10,5,100].sort()); // wrong


console.log("HOF");

[1,2,3].forEach(n=>console.log(n));
console.log([1,2,3].forEach(n=>n*2));

console.log([1,2,3].map(n=>n*2));
console.log(["john","doe"].map(n=>n.toUpperCase()));

let employees=[
  {name:"A",salary:1000},
  {name:"B",salary:5000}
];

console.log(employees.map(e=>e.salary));

console.log(employees.filter(e=>e.salary>3000));
console.log([1,2,3,4].filter(n=>n%2==0));
console.log(["apple","banana","kiwi"].filter(s=>s.length>5));

console.log([10,20,60].find(n=>n>50));
console.log(employees.find(e=>e.salary<2000));

console.log("REDUCE");

console.log([10,20,30].reduce((a,b)=>a+b,0));
console.log([5,9,2].reduce((a,b)=>a>b?a:b));
console.log([1,2,3].reduce(a=>a+1,0));

let obj=["a","b","c"].reduce((acc,v,i)=>{
  acc[v]=i;
  return acc;
},{});
console.log(obj);

console.log(employees.reduce((a,e)=>a+e.salary,0));


console.log("CONVERSION");

console.log([1,2,3].toString());
console.log([1,2,3].join(" - "));
console.log("1,2,3".split(","));
console.log([1,[2,3]].flat().join(","));

let words=["I","love","JS"];
console.log(words.join(" "));


console.log("BONUS");

let cart=[
  {item:"pen",price:10},
  {item:"book",price:50}
];
console.log(cart.reduce((a,i)=>a+i.price,0));

let products=[
  {name:"A",price:300},
  {name:"B",price:700}
];
console.log(products.filter(p=>p.price<500));

let items=["apple","banana","grape"];
console.log(items.filter(i=>i.includes("ap")));

console.log([...new Set([1,2,2,3,3])]);

let grouped=employees.reduce((acc,e)=>{
  let key=e.salary>3000?"high":"low";
  (acc[key]=acc[key]||[]).push(e);
  return acc;
},{});
console.log(grouped);
