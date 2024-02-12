/* Swapping Two Variables : */

let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // Outputs: 2, 1

/* Checking the number is Even : */

const isEven = num => num % 2 === 0;
console.log(isEven(4)); // true
console.log(isEven(3)); // false

/* Removing Duplicates from an Array: */

const removeDuplicates = arr => [...new Set(arr)];
console.log(removeDuplicates([1, 2, 2, 3])); // [1, 2, 3]

/* Finding the Maximum Value in the array : */

const max = arr => Math.max(...arr);
console.log(max([1, 2, 3, 4])); // 4

/* Reverse a String : */

const reverseString = str => str.split('').reverse().join('');
console.log(reverseString("hello")); // "olleh"