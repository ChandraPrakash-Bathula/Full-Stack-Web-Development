// Here a is declared and initialized by using assignment operator.
var a = 9;

/* Initializing the variables using assignment operator. 
Here the value is undefined yet */

var a;
var B;
var C;

var A = 5;
var B = 11;
var C = "I am a ";

// Now here we can manipulate them like these as they are in var;

A = A + 6;
B = B + 7;
C = C + "String !";

console.log(A, B, C);

// Case Sensitivity in Variables:

var scope;
var properCamelCase;
var titleCaseOver;

// Assignment will be incorrect if they have same spelling and different capitilization.

scope = 2;
properCamelCase = "string";
titleCaseOver = 9898;

console.log(scope, properCamelCase, titleCaseOver);

// Adding Numbers in Javascript: It is pretty straight forward;

var cd = 10 + 9;
console.log(cd);

//Subraction is also the same:

var dc = 10 - 9;
console.log(dc);

// Multiplication in numbers:
var multiply = 10 * 9;
console.log(multiply);

// Dividing Numbers:

var division = 25 / 5;
console.log(division); //here we can get the quotient which is 5.

/* Incrementing Numbers:

 There are two ways they are: */

var myVar = 9;
myVar = myVar + 1;
myVar++;
console.log(myVar);

/* Decrementing Numbers:

 The same opposite ways */

var noVar = 11;
noVar = noVar - 1;
noVar--;
console.log(noVar);

/* Decimal number are often called as floating point numbers (or) floats: */

var myDecimal = 1.09;
var ourFloat = 9.09;

/* Multiplying Decimals & Division of Decimal:
 
It is same as the integers or numbers */

var decimalMultiply = 12.09 * 8.09;
console.log(decimalMultiply);

var divideFloats = 1.08 / 0.04;
console.log(divideFloats);

/*  In order to find a remainder in the division:
We just need to use the % symbol. */

var remainder = 10 % 3;
console.log(remainder);
console.log(alert(remainder));
