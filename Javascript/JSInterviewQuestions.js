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

/* Merging Two arrays and removing duplicates : */
const mergeArraysUnique = (arr1, arr2) => [...new Set([...arr1, ...arr2])];
console.log(mergeArraysUnique([1, 2], [2, 3, 4])); // [1, 2, 3, 4]

/* Checking for prime numbers : */
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};
console.log(isPrime(5)); // true
console.log(isPrime(4)); // false

/* Implementing Debounce Function : */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/* Finding the Longest word in a string : */
const findLongestWord = (str) => {
  return str.split(" ").reduce((longest, currentWord) => {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
};
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // "jumped"

/* Converting Object to Query string parameter : */
const objectToQueryString = (params) =>
  Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
console.log(objectToQueryString({ name: "John Doe", age: 30 })); // "name=John%20Doe&age=30"

/* Checking if an object is empty : */
const isEmpty = (obj) => Object.keys(obj).length === 0;
console.log(isEmpty({})); // true
console.log(isEmpty({ a: 1 })); // false

/* Getting All the Values of an Enum-like Object: */
const enumValues = (obj) => Object.values(obj);
console.log(enumValues({ RED: "#FF0000", GREEN: "#00FF00", BLUE: "#0000FF" })); // ['#FF0000', '#00FF00', '#0000FF']

/* Implementing a Simple Publish/Subscribe Pattern: */
class PubSub {
  constructor() {
    this.events = {};
  }

  subscribe(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  publish(event, data) {
    if (this.events[event]) {
      this.events[event].forEach((callback) => callback(data));
    }
  }
}

const pubSub = new PubSub();
pubSub.subscribe("anEvent", (data) => console.log(data));
pubSub.publish("anEvent", "Hello World!");

setTimeout(function () {
  console.log("Hey Bro.!");
}, 5000);

function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
});

/* Button Click Function : It counts when a user click on a button and console logs the button click count. */
function attachingEventListener() {
  let count = 0;
  document
    .getElementById("clickMe")
    .addEventListener("mouseenter", function button() {
      console.log("Bro hovered the button for this", count++, " times.!");
    });
}
attachingEventListener();

/* Button Hover Function : It counts when a user hovers on a button and console logs the button hover count. */
//function attachingEventListener() {
//   let count = 0;
//   document
//     .getElementById("clickMe")
//     .addEventListener('click', function button() {
//       console.log("Bro Hovered the button for this", count++ , " times.!");
//     });
// }
// attachingEventListener();

console.log("Start");
setTimeout(function callback() {
  console.log("Call Back Function");
}, 5000);
console.log("End");

/* Proof that the setTimeOut() like event listeners executes only after the main block execution. */

let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 10000){
endDate = new Date().getTime()
}
console.log('Bro While Loop Expired Here!');

/* Radius of the circles : */

const radius = [3, 4, 5, 6];

const circleArea = function (radius) {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};
console.log(circleArea(radius));

/* Circumference of a circle : */

const circumeferences = function (radius) {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};
console.log(circumeferences(radius));

/* Diameter of a circle : */
const calculateDiameter = function (radius) {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }
  return output;
};
console.log(calculateDiameter(radius));

/* Optimized versions for the above code : */
const area = function (radius){
  return Math.PI * radius * radius;
}

const diameter = function (radius){
 return 2 * radius;
}

const circumeference = function (radius){
return 2 * Math.PI * radius;
}

const calculations = function(radius,logic){
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
}
console.log(calculations(radius,area));
console.log(calculations(radius,circumeference));
console.log(calculations(radius,diameter));