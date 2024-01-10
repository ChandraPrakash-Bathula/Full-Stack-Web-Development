/* Variables in Javascript;
 variables allow javascript to store and manipulate data in dynamic fashion; 
 It's basically a label to point to the data. It is like a box and can fill it with anything.
 
 Variable can be defined by using var keyword */

var myName = "Chandra Prakash Bathula";

console.log(myName);
//var can be used throughout the whole program
myName = 10;

//  And also there are three ways to define a variable; var, let and const

let myNames = "Chandu";
//Let can be used only in the scope where we have defined it
console.log(myNames);

const pi = 3.14567;
//const is immutable
console.log(pi);

// Storing values with assignment operator;

var a; //Here we have declared a variable.
console.log(a);
var b = 7; //Here we have declared and assigned a variable in a single line. Here the = is the assignment operator.

// Now we can assign value to a

a = 9; //Now the value of a is 9

b = a; // we can even do that; Here the contents of a are assigned to b;

console.log(a);

// Initializing variables with assignment operator
