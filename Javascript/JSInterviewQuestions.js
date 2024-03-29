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

// /* Proof that the setTimeOut() like event listeners executes only after the main block execution. */

// let startDate = new Date().getTime();
// let endDate = startDate;
// while(endDate < startDate + 10000){
// endDate = new Date().getTime()
// }
// console.log('Bro While Loop Expired Here!');

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
const area = function (radius) {
  return Math.PI * radius * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

const circumeference = function (radius) {
  return 2 * Math.PI * radius;
};

const calculations = function (radius, logic) {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
console.log(radius[0]);
console.log(calculations(radius, area));
console.log(calculations(radius, circumeference));
console.log(calculations(radius, diameter));

Array.prototype.calculation = function (logic) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(radius.calculation(area));

const array = [5, 1, 2, 3, 6];

function double(x) {
  return x * 2;
}

function triple(x) {
  return x * 3;
}

function binary(x) {
  return x.toString(2);
}
const mapDouble = array.map(double);
console.log(mapDouble);

const mapTriple = array.map(triple);
console.log(mapTriple);

const mapBinary = array.map(binary);
console.log(mapBinary);

const mapBinaryy = array.map(function binary(x) {
  return x.toString(2);
});
console.log(mapBinaryy);
const mapBinar = array.map((x) => {
  return x.toString(2);
});
console.log(mapBinar);

const mapBinarhigherOrder = array.map((x) => x.toString(2));
console.log(mapBinarhigherOrder);

/* Filter : odd numbers */
function odd(x) {
  return x % 2;
}
const filtering = array.filter(odd);
console.log(filtering);

const arr = [5, 6, 3, 4, 1];

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(findSum(arr));

function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax(arr));

const sumOutput = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log(sumOutput);

const findMaxOutput = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);
console.log(findMaxOutput);

/* Some More Examples of Map, Filter and Reduce:
map - Transforming Data
Scenario 1: Converting Temperatures */

const celsiusTemps = [0, 10, 20, 30];
const fahrenheitTemps = celsiusTemps.map((temp) => (temp * 9) / 5 + 32);
console.log(fahrenheitTemps);

/* Scenario 2: Updating a List of Objects */

const products = [
  { name: "Product 1", price: 100 },
  { name: "Product 2", price: 200 },
];
const discountedProducts = products.map((product) => ({
  ...product,
  price: product.price * 0.9,
}));
console.log(discountedProducts);

/* Scenario 3: Capitalizing Strings */

const namess = ["alice", "bob", "charlie"];
const capitalizedNames = namess.map(
  (name) => name.charAt(0).toUpperCase() + name.slice(1)
);
console.log(capitalizedNames);

/* Scenario 4: Extracting Specific Object Properties */

const users = [
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@example.com" },
];
const emails = users.map((user) => user.email);
console.log(emails);

/* Scenario 5: Full Name */
const user = [
  { fname: "Akshay", lName: "Kumar", age: 24 },
  { fname: "Cyril", lName: "Diagne", age: 27 },
  { fname: "Pawan", lName: "Kalyan", age: 50 },
  { fname: "Tom", lName: "Cruise", age: 54 },
  { fname: "Micheal", lName: "Jackson", age: 28 },
  { fname: "Micheal", lName: "Durbin", age: 28 },
];

const userOutput = user.map((x) => x.fname + " " + x.lName);
console.log(userOutput);

/* filter - Selecting Specific Items
Scenario 1: Filtering Specific Elements */

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

/* Scenario 2: Removing Specific Items : */

const tasks = ["Buy milk", "Clean kitchen", "Fix laptop", "Task done"];
const activeTasks = tasks.filter(
  (task) => !task.toLowerCase().includes("done")
);
console.log(activeTasks);

/* Scenario 3 : Excluding specific values */

const mixedValues = [0, 1, false, 2, "", 3, null, "a", undefined, NaN];
const truthyValues = mixedValues.filter(Boolean);
console.log(truthyValues);

/* Scenario 4 : Filtering by Length */

const words = ["bear", "cat", "elephant", "dog"];
const longWords = words.filter((word) => word.length > 3);
console.log(longWords);

/* Scenario 5: Filtering the fnames for less than 30 */

const outputFilter = user.filter((x) => x.age < 30).map((x) => x.fname);
console.log(outputFilter);

/* reduce - Aggregating Data
Scenario 1: Summing Values */

const values = [10, 20, 30, 40];
const total = values.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(total);

/* Scenario 2: Building a Histogram */

const names = ["Alice", "Bob", "Alice", "Bob", "Charlie"];
const nameCounts = names.reduce((acc, name) => {
  acc[name] = (acc[name] || 0) + 1;
  return acc;
}, {});
console.log(nameCounts);

/* Scenario 3: Finding Maximum Value */

const numberss = [10, 5, 100, 2, 1000];
const maxNumber = numberss.reduce(
  (max, current) => (current > max ? current : max),
  numberss[0]
);
console.log(maxNumber);

/* Scenario 4 : Grouping Objects by a Property */

const people = [
  { name: "Alice", year: 1980 },
  { name: "Bob", year: 1980 },
  { name: "Charlie", year: 1990 },
  { name: "Diana", year: 1990 },
];
const groupedByYear = people.reduce((acc, person) => {
  if (!acc[person.year]) {
    acc[person.year] = [];
  }
  acc[person.year].push(person);
  return acc;
}, {});
console.log(groupedByYear);

/* Scenario 5 : finding out the similar and unique values. */

const userOuputAge = user.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(userOuputAge);

const outputReduce = user.reduce(function (acc, curr) {
  if (curr.age < 30) {
    acc.push(curr.fname); 
  }
  return acc;
}, []);

console.log(outputReduce);

/*Simple Example : */
const num = [1, 2, 3, 4, 5];
const sum = num.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); 

/* Fruit Count : */

const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'orange'];
const frequency = fruits.reduce((accumulator, fruit) => {
  accumulator[fruit] = (accumulator[fruit] || 0) + 1;
  return accumulator;
}, {});

console.log(frequency);

/* Electronics price: */

const orders = [
  { productId: 1, productName: 'Laptop', category: 'Electronics', amount: 1000 },
  { productId: 2, productName: 'Shirt', category: 'Apparel', amount: 50 },
  { productId: 3, productName: 'Smartphone', category: 'Electronics', amount: 500 },
  { productId: 4, productName: 'Coffee Maker', category: 'Home Appliances', amount: 100 }
];

const totalElectronicsValue = orders.reduce((accumulator, order) => {
  if (order.category === 'Electronics') {
    return accumulator + order.amount;
  }
  return accumulator;
}, 0);

console.log(totalElectronicsValue);

/* Interview Qestions : */

//Reversing a String 

function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const originalString = 'hello';
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: 'olleh'

//Largest Number in an Array

function findLargestNumber(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

const numberrs = [3, 8, 2, 10, 5];
const largestNumber = findLargestNumber(numberrs);
console.log(largestNumber); // Output: 10

//Checking if a string is a palindrome 

function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const reversed = cleanStr.split('').reverse().join('');
  return cleanStr === reversed;
}

const testString1 = 'racecar';
const testString2 = 'hello';
console.log(isPalindrome(testString1)); // Output: true
console.log(isPalindrome(testString2)); // Output: false

/* CRUD Operations in JS : */

let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { id: 3, title: '1984', author: 'George Orwell', year: 1949 }
];

/* Create : */

function createBook(book) {
  const lastBook = books[books.length - 1];
  const newId = lastBook ? lastBook.id + 1 : 1;
  book.id = newId;
  books.push(book);
}

createBook({ title: 'Brave New World', author: 'Aldous Huxley', year: 1932 });

/* Read : */

// Get all books
function getAllBooks() {
  return books;
}

// Get a single book by ID
function getBookById(id) {
  return books.find(book => book.id === id);
}

console.log(getAllBooks());
console.log(getBookById(2));

/* Update : */

function updateBook(id, updatedBookInfo) {
  books = books.map(book =>
    book.id === id ? { ...book, ...updatedBookInfo } : book
  );
}

updateBook(3, { title: 'Nineteen Eighty-Four', author: 'George Orwell', year: 1949 });

/* Delete : */

function deleteBook(id) {
  books = books.filter(book => book.id !== id);
}

deleteBook(1);

/* Finding the duplicates : */

function findAllDuplicates(nums) {
  const duplicates = [];
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) {
      duplicates.push(Math.abs(nums[i]));
    } else {
      nums[index] = -nums[index];
    }
  }
  // Restore numbers
  for (let i = 0; i < nums.length; i++) {
    nums[i] = Math.abs(nums[i]);
  }
  return duplicates;
}

console.log(findAllDuplicates([4,3,2,7,8,2,3,1])); // [2,3]

/* Flatteing a function : */

function flatten(arr) {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

console.log(flatten([1, [2, 3, [4]], 5, [6]])); // [1,2,3,4,5,6]

/* Implementing a array.prototype.filter : */

function customFilter(array, callback) {
  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}

const numbes = [1, 2, 3, 4, 5];
const evenNumbes = customFilter(numbes, numb => numb % 2 === 0);
console.log(evenNumbes); // [2, 4]

/* Interview Questions : */

function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
      console.log('Outer Variable: ' + outerVariable);
      console.log('Inner Variable: ' + innerVariable);
  }
}
const newFunction = outerFunction('outside');
newFunction('inside'); // Outer Variable: outside, Inner Variable: inside

/* Interview Questions : */

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(this.name + ' makes a noise.');
}

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function () {
  console.log(this.name + ' barks.');
}

var dog = new Dog('Rex');
dog.speak(); // Rex barks.

/* Promises : */
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done"), 1000);
});

promise.then(
  result => console.log(result), // "done" after 1 second
  error => console.log(error) // doesn't run
);

/* Reversing an Array : */

function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
  }
  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]

/* Checking for any anargams : */

function isAnagram(str1, str2) {
  const normalize = str => str.toLowerCase().replace(/[\W_]+/g, "").split("").sort().join("");
  return normalize(str1) === normalize(str2);
}

console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world")); // Output: false

/* Finding Missing Numbers : */

function findMissingNumber(nums) {
  let expectedSum = nums.length * (nums.length + 1) / 2;
  let actualSum = nums.reduce((acc, curr) => acc + curr, 0);
  return expectedSum - actualSum;
}

console.log(findMissingNumber([3, 0, 1])); // Output: 2
console.log(findMissingNumber([9,6,4,2,3,5,7,0,1])); // Output: 8

/* Validating a Binary Tree : */

function isValidBST(root, min = null, max = null) {
  if (root === null) return true;
  if (min !== null && root.val <= min) return false;
  if (max !== null && root.val >= max) return false;
  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
}

// Use an appropriate method to create a binary tree based on your setup
// This function assumes you have a way to create a binary tree node structure.

/* Merged two sorted lists: */

class ListNode {
  constructor(value = 0, next = null) {
      this.value = value;
      this.next = next;
  }
}

function mergeTwoLists(l1, l2) {
  let dummy = new ListNode();
  let tail = dummy;

  while (l1 !== null && l2 !== null) {
      if (l1.value < l2.value) {
          tail.next = l1;
          l1 = l1.next;
      } else {
          tail.next = l2;
          l2 = l2.next;
      }
      tail = tail.next;
  }

  tail.next = l1 === null ? l2 : l1;
  return dummy.next;
}

/* Maximum Subarray Sum : */

function maxSubArray(nums) {
  let maxCurrent = nums[0];
  let maxGlobal = nums[0];

  for (let i = 1; i < nums.length; i++) {
      maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
      if (maxCurrent > maxGlobal) {
          maxGlobal = maxCurrent;
      }
  }
  return maxGlobal;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Output: 6

/* Longest Consecutive Sequence : */
function longestConsecutive(nums) {
  if (!nums.length) return 0;

  nums.sort((a, b) => a - b);
  let longestStreak = 1;
  let currentStreak = 1;

  for (let i = 1; i < nums.length; i++) {
      if (nums[i] != nums[i - 1]) {
          if (nums[i] == nums[i - 1] + 1) {
              currentStreak += 1;
          } else {
              longestStreak = Math.max(longestStreak, currentStreak);
              currentStreak = 1;
          }
      }
  }

  return Math.max(longestStreak, currentStreak);
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4

/* Duplicates in an array : */
function findDuplicates(nums) {
  let duplicates = [];
  for (let i = 0; i < nums.length; i++) {
      let index = Math.abs(nums[i]) - 1;
      if (nums[index] < 0) {
          duplicates.push(Math.abs(nums[i]));
      } else {
          nums[index] = -nums[index];
      }
  }
  return duplicates;
}

console.log(findDuplicates([4,3,2,7,8,2,3,1])); // Output: [2,3]

/* Maximum Sub Array : */
function maxSubArray(nums) {
  let maxCurrent = nums[0];
  let maxGlobal = nums[0];
  for (let i = 1; i < nums.length; i++) {
      maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
      if (maxCurrent > maxGlobal) {
          maxGlobal = maxCurrent;
      }
  }
  return maxGlobal;
}

class TrieNode {
  constructor() {
      this.children = {};
      this.endOfWord = false;
  }
}

class Trie {
  constructor() {
      this.root = new TrieNode();
  }

  insert(word) {
      let current = this.root;
      for (let char of word) {
          if (!current.children[char]) {
              current.children[char] = new TrieNode();
          }
          current = current.children[char];
      }
      current.endOfWord = true;
  }

  search(word) {
      let current = this.root;
      for (let char of word) {
          if (!current.children[char]) {
              return false;
          }
          current = current.children[char];
      }
      return current.endOfWord;
  }

  startsWith(prefix) {
      let current = this.root;
      for (let char of prefix) {
          if (!current.children[char]) {
              return false;
          }
          current = current.children[char];
      }
      return true;
  }
}

/* Advanced version Promises : */
class SimplePromise {
  constructor(executor) {
    this.queue = [];
    this.errorHandler = () => {};
    this.finallyHandler = () => {};

    const resolve = (value) => {
      this.queue.forEach(callback => callback(value));
      this.finallyHandler();
    };

    const reject = (error) => {
      this.errorHandler(error);
      this.finallyHandler();
    };

    executor(resolve, reject);
  }

  then(callback) {
    this.queue.push(callback);
    return this;
  }

  catch(handler) {
    this.errorHandler = handler;
    return this;
  }

  finally(callback) {
    this.finallyHandler = callback;
    return this;
  }
}

// Usage example
const fakeAPI = () => new SimplePromise((resolve, reject) => {
  setTimeout(() => resolve("Success!"), 1000);
});

fakeAPI()
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log("Operation completed."));

/* Memoization Functions : */
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = args.toString();
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// Example usage
const fib = (n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2));
const memoizedFib = memoize(fib);

console.log(memoizedFib(40)); // Significantly faster for subsequent calls

/* Array.Prototype. Flat () : */

function flatPolyfill(arr, depth = 1) {
  let result = [];
  arr.forEach(item => {
    if (Array.isArray(item) && depth > 0) {
      result.push(...flatPolyfill(item, depth - 1));
    } else {
      result.push(item);
    }
  });
  return result;
}

Array.prototype.customFlat = function(depth = 1) {
  return flatPolyfill(this, depth);
};

// Usage example
const nestedArray = [1, [2, 3], [[4]], [[[5]]]];
console.log(nestedArray.customFlat(2)); // [1, 2, 3, 4, [5]]

/* Event Emitters : */
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, listener) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
  }

  emit(eventName, ...args) {
    const listeners = this.events[eventName];
    if (listeners) {
      listeners.forEach(listener => {
        listener.apply(this, args);
      });
    }
  }

  off(eventName, listenerToRemove) {
    if (!this.events[eventName]) return;
    this.events[eventName] = this.events[eventName].filter(listener => listener !== listenerToRemove);
  }
}

// Usage example
const emitter = new EventEmitter();
const sayHi = (name) => console.log(`Hi ${name}`);
const sayBye = (name) => console.log(`Bye ${name}`);

emitter.on('greet', sayHi);
emitter.on('greet', sayBye);

emitter.emit('greet', 'Alice'); // Hi Alice Bye Alice

emitter.off('greet', sayBye);

emitter.emit('greet', 'Bob'); // Hi Bob