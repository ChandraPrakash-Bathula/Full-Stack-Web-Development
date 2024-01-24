/*Destructuring Assignment with Nested Objects: */

const LOCAL_FORECAST = {
  today: { min: 72, max: 81 },
  tomorrow: { min: 72.9, max: 81.18 },
};
function getMaxOfTmrw(forecast) {
  "use strict";

  const {
    tomorrow: { max: maxOfTomorrow },
  } = forecast;

  return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));

/* Use Destructuring Assignment to Assign Variables from Arrays. */

const [z, x, , y] = [1, 2, 3, 4, 5, 6, 7];
/* The difference between destructuring objects and arrays is that we cannot assign specific values. */
console.log(z, x, y);

let a = 8,
  b = 6;
(() => {
  "use strict";
  [a, b] = [b, a];
})();
console.log(a);
console.log(b);

/* Use Destructuring Assignment with the Rest Operator. We can use destructuring assignment with the rest operator to re-assign array elements. */

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function removeFirstTwo(list) {
  const [a, b, ...arr] = list; //removing first two values and assigning the remaining values.
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

/* Use Destructuring Assignment to Pass an Object as a Function's Parameters. We can use destructuring assignment to pass an object as a function's parameter. */

const stats = {
  max: 54.18,
  std: 4.5,
  median: 27,
  min: -0.72,
  avg: 45,
};
const half = (function () {
  return function half(stats) {
    return (stats.max + stats.min) / 2.0;
  };
})();
console.log(stats);
console.log(half(stats));

const statis = {
    max: 54.18,
    std:4.5,
    median:27,
    min:-0.72,
    avg:45
};
const halfes = (function(){
    return function halfes({max,min}){
        return (max + min)/2.0;
    };
})();
console.log(statis);
console.log(halfes(statis));
 /* This will be commonly used when we do the API calls. When you are getting information from an AJAX request or an API request. It will have a lot of information than we need. And we can use destructuring to get it down what we actually want to work with. */


/* Create Strings using Template Literals. */

const person = {
    name: 'Harvey Spectre',
    age: 24
};

//Template Literal with multi-line and string interpolation.

const greeting = `Hello, Mike, I am ${person.name}! I am the best closer in the city for more than ${person.age} years.`

console.log(greeting);

const result = {
    success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
    failure: ['no-var', 'var-on-top', 'linebreak'],
    skipped: ['id-blacklist', 'no-dup-keys']
};
function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class='text-warning'>${arr[i]}</li>`)
    }
    return resultDisplayArray;
};
const resultDisplayArray = makeList(result.success);
console.log(resultDisplayArray);

const any = {
    one: ['MB', 'PK', 'AA'],
    two: ['RC', 'NTR', 'PB'],
    three: ['SRK', 'Bhai', 'Ameer']
};

function something(arra) {
    const displayingArra = [];
    for (var i = 0; i < arra.length; i++) {
        displayingArra.push(`<li class="text-no-warning">${arra[i]}</li>`);
    }
    return displayingArra;
}
const displayingArra = something(any.one);
console.log(displayingArra);

/* Write Concise Object Literal Declarations Using Simple Fields. */

const createPerson = (name,age,gender) => {
    return {
        name:name,
        age:age,
        gender:gender
    };
};
console.log(createPerson('Harvey Spectre',24,'Alpha-Male'));

const creatingSomething = (name,age) => {
    return {
        name:name,
        age:age
    };
};
console.log(creatingSomething('Mike',28));