console.log("hello world")
console.log(1)

let prefix = "Toi la: ";
let myName = "LVAT ";
let myAge = 18;
let myParagraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
console.log(myName);
console.log(myParagraph);

let newString = prefix + myName + myAge;
let newString2 = `${prefix}${myName}${myAge}`;
console.log(newString);
console.log(newString2);

console.log(newString.length);

let nationality = "VN";
let text = "123VN"
console.log(text.search(nationality));

console.log(myParagraph.substring(0, 5));

console.log(myParagraph.replaceAll("o", "e"));

console.log(myParagraph.split(" "));

let trimtext = "        ABCDE           ";
console.log(trimtext.trim());

let year = 2022;
const DOB = 2004;

let a = 20;
let b = 5;
let c = a - b;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(c);

a += 1; // a = a + 1 <=> a++
console.log(a);

b -= 1; // b = b - 1 <=> b--
console.log(b);

let d = 20;
d **= 2; // d = d ** 2 <=> d = d^2
console.log(d);

console.log(Math.PI);
console.log(Math.pow(a, b));

let x = 5;
let y = "5";
console.log(y);
console.log(x+"");

console.log(x);
console.log(Number(y));
console.log(parseInt(y));

console.log(Number(y) === parseInt(y));

let z = "afe";
console.log(Number(z));
console.log(isNaN(Number(z)));

let aa = true;
let bb = false;
let cc = true;
let dd = false;
// && = and, || = or
console.log(aa && bb);
console.log(aa && cc);
console.log(bb || dd);
console.log(aa || dd);

let myAddress = "HN";
const MY_AGE = 18;
var myCall = "Toan";
