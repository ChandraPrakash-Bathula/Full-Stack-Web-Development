"use strict";
/* This in Global Space :
In the global space it will always represents a global object and outputs the window object.
What is global Object. JS doesn't simply runs on browser, it runs on, multiple types of devices. 
So wherever it runs, it has its run time environment there. But the run time environment differs from place to place in devices.
So whatever the global object is in that particular run time environment, 'this' keyword refers to that value. */

console.log(this);
// In the case of browsers we have window object here for the 'this' keyword. But when it comes to the Node JS it is global.

/* 'this' keyword in Function Space : 'this' keyword acts different in strict mode and in non-strict mode.
 */

function x() {
  // In case of function space the value of 'this' keyword depend on the strict | non-strict mode.
  console.log(this);
}
x(); //undefined
window.x(); //window

/* 'this' inside non-strict mode - (this substitution).
If the value of the 'this' keyword is null or undefined. 
Then 'this' will be replaced with the global object only in non-strict mode. */
/* Value of 'this' keyword depends on how this function will be called (window) */

/* 'this' keyword inside a object's mode  : In this case the value of the 'this' keyword is the object where 'this' method is present */

const student = {
  name: "Hanuman",
  printName: function () {
    console.log(this.name); //here 'this' will refere to the object and a refers to the value.
    console.log(this);
  },
};
student.printName();

/* Call Apply and Bind Methods in this : 
'this' keyword should be used when we have to share methods. */

const student2 = { name: "Ram" };
student.printName.call(student2); //here the value of this is student2

/* 'this' keyword inside an arrow function : 
Arrow function does not have their own 'this'. They take the value of their lexical environment where they are enclosed. */

const arrowFunction = {
  a: "something",
  arrow: () => {
    console.log(this);
  },
};
arrowFunction.arrow();

/* 'this' keyword in a nested arrow function : */

const arrowFunction2 = {
  a: "10",
  arrow2: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
  by: () => {
    console.log(this);
  },
};
arrowFunction2.arrow2();
arrowFunction2.by();
