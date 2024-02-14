/* Swapping Two Variables : */

let a = 1,
  b = 2;
[a, b] = [b, a];
console.log(a, b); // Outputs: 2, 1

/* Checking the number is Even : */

const isEven = (num) => num % 2 === 0;
console.log(isEven(4)); // true
console.log(isEven(3)); // false

/* Removing Duplicates from an Array: */

const removeDuplicates = (arr) => [...new Set(arr)];
console.log(removeDuplicates([1, 2, 2, 3])); // [1, 2, 3]

/* Finding the Maximum Value in the array : */

const max = (arr) => Math.max(...arr);
console.log(max([1, 2, 3, 4])); // 4

/* Reverse a String : */

const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("hello")); // "olleh"

/* Checking if a String is a Palindrome */

const isPalindrome = (str) => {
  str = str.replace(/\W/g, "").toLowerCase();
  return str === str.split("").reverse().join("");
};
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

/* Find the factorial of the number */
const factorial = (num) => (num < 2 ? 1 : num * factorial(num - 1));
console.log(factorial(5)); // 120

/* Fizz Buzz Problem : */
for (let i = 1; i <= 15; i++) {
  let output = "";
  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";
  console.log(output || i);
}

/* Flattening an Array : */
const flatten = (arr) =>
  arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val),
    []
  );
console.log(flatten([1, [2, [3, [4]], 5]])); // [1, 2, 3, 4, 5]

/* Checking for Anargams : */
const areAnagrams = (str1, str2) => {
  const normalize = (str) =>
    str
      .toLowerCase()
      .replace(/[^a-z\d]/g, "")
      .split("")
      .sort()
      .join("");
  return normalize(str1) === normalize(str2);
};
console.log(areAnagrams("listen", "silent")); // true

/* Set time out for a number and for the number of seconds respoectively : */

function y() {
  for (let i = 0; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
console.log(y());
/* function : */

function outer() {
  var as = 9;
  function inner() {
    console.log(as);
  }
  return inner;
}
outer()(); // returns and calls the inner() function in the same line.
/* Constructor Function */

function Counter() {
  var count = 0;
  this.incrementFunction = function () {
    count++;
    console.log(count);
  };
  this.decrementFunction = function () {
    count--;
    console.log(count);
  };
}

var counter1 = new Counter();

counter1.incrementFunction();

/* Creating a deep copy of an object: */

const deepCopyObject = (obj) => JSON.parse(JSON.stringify(obj));
const original = { a: 1, b: { c: 2 } };
const copied = deepCopyObject(original);
console.log(copied); // { a: 1, b: { c: 2 } }
