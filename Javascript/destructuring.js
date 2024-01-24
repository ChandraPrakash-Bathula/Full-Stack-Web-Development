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
