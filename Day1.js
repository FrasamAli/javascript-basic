1
function multiply(num1, num2) {
  return num1 * num2;
}
console.log(multiply(2,3))

2
function greeting(name) {
  return `Hello, ${name}!`;
}
console.log(greeting("Ali"))

3
const sum = (arr) => {
  let result = 0;
  arr.forEach((num) => {
    result += num;
  });
  return result;
};
const array1 = [1, 2, 3, 4, 5];
const array2 = [10, 20, 30, 40, 50];
const array3 = [100, 200, 300, 400, 500];
console.log(sum(array3));

4
function calculateBMI(weight, height) {
  return weight / (height * height);
}

console.log(calculateBMI(70, 1.75));
console.log(calculateBMI(80, 1.8));
console.log(calculateBMI(60, 1.6));

5
const stringLength = (string) => string.length;
console.log(stringLength("this is a test case"))

6
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));
console.log(reverseString("12345"));

function reverseString(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
let str = 'passion';
let reversed = reverseString(str);
console.log(reversed);

7
const greeting = ({ first, last }) => `Hello, ${first} ${last}!`;
const person1 = { first: 'John', last: 'Doe' };
const person2 = { first: 'Jane', last: 'Smith' };

console.log(greeting(person1));
console.log(greeting(person2));

8
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize('hello'));
console.log(capitalize('world'));
console.log(capitalize('JavaScript'));

9
const capitalizeAll = arr => arr.map(str => str.toUpperCase());

const arr1 = ['hello', 'world', 'javascript'];
const arr2 = ['apple', 'banana', 'orange'];

console.log(capitalizeAll(arr1));
console.log(capitalizeAll(arr2));

10
function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}
console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));
console.log(isPalindrome('level'));



































