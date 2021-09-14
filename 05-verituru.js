const price = 55;
const stringValue = "abc";
const pass = true;

console.log(typeof price);

console.log(typeof stringValue);
console.log(typeof pass);

let number01 = "11,6px";

console.log(number01, typeof number01);
console.log(typeof parseInt(number01));

let changeNumber = parseFloat(number01);

console.log(number01,typeof(number01));

console.log(changeNumber,typeof(changeNumber));

changeNumber=changeNumber.toString();

console.log(changeNumber, typeof changeNumber);

let number5 = 55;
number5 = number5.toString();
console.log(number5, typeof number5);
