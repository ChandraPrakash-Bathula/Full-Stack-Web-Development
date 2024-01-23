/* Reusable Code with Functions(): */

function thisFunct() {
  /* In this we will have the function keyword first then the name we need to give and paranthesis () and
 curly braces in which the logic happens and finally calling the function at the end. */
  console.log("Bro working !");
}
thisFunct();

function myfunction() {
  alert("Bro"); //This is a popup.
}
myfunction();

/* Passing values to the functions with arguements: 
Parameters are the variables acts as the placeholders for the values that are to be input to a function, when it is called. */

function mathFunct(a, b) {
  /* Here a & b are parameters; They can be used for the logic first and at the time of calling we can addign values and then the function logic will happen as per the values. */
  console.log(a - b);
}
mathFunct(100, 19);

function functWithMultiple(a, b, c) {
  console.log(a + b * c);
}
functWithMultiple(12, 24, 63);

/* Global Scope and Functions: 

Scope refers to teh visibility of the variables. 
Variables which are define outside the function block has global scope 
and that variables that are defined inside the function are in the parameters block has a 
local scope.

Global scope means we can see them everywhere but the local has visibility in that particular function. */

var myglobal = 12;

function funct1() {
  var oopsglobal = 14;
  /* Incase if we don't give var keyword then that variable will be a global variable. */
}

function funct2() {
  //Global
  var output = "";

  if (typeof myglobal != "undefined") {
    output += "myglobal : " + myglobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += "oopsglobal : " + oopsglobal;
  }
  console.log(output);
}
funct1();
funct2();

//Local:

function localScope() {
  var myvar = 12;
  console.log(myvar);
}
localScope();
console.log(myvar); //Throws an error.

/* Global Vs Local Scope in Functions: 
We can have a global and local function with the same name. In this case global function takes precedence over local fuction. But if theu have same name and called in a function local function will takes the charge. Function will give priority to local variable to global variable. */

var outerWear = "Shirt";

function theOutfit() {
  var outerWear = "Sweater";
  return outerWear;
}
console.log(theOutfit());
console.log(outerWear);

/* Returning a Value from a function with return. */

function mathFunction(num) {
  return num - 9;
}
console.log(mathFunction(18));

function multiplication(number) {
  return number * 9;
}
console.log(multiplication(9));

/* Understanding Undefined Value returned from a function. */

var sum = 0;
function addition() {
  sum = sum + 3;
}
console.log(addition());

var sumo = 0;
function adding() {
  return (sumo += 9);
}
console.log(adding());

/* Assignment with a Returned Value. */

var someNumber = 0;

function value(num) {
  return (num + 5) / 1;
}
someNumber = value(4);
console.log(someNumber);
var process;

function processesArg(number) {
  return (number + 3) / 2;
}
process = processesArg(15);
console.log(process);

/* Stand in Line: In CS a queue is an abstract data structure where items are kept in order. 
Where New Items can be added in the back of the Queue and Old items can be deleted from the back of the row. */

function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

var testArray = [1, 2, 3, 4, 5, 6, 7, 8];

console.log("Before: " + JSON.stringify(testArray));
console.log(nextInLine(testArray, 9));
//In the above function last integer 9 is added as item and the first item is shifted.
console.log("After: " + JSON.stringify(testArray));

/* Boolean Values: */

function booleans() {
  //  return false;
  return true;
}
console.log(booleans());

/* Use Conditional Logic with If Statements. 
If Statements are used to take decisions in code. */

function trueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}
console.log(trueOrFalse(true));

function trueOrfalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, Bro";
  }
  return "No, False Bro";
}
console.log(trueOrfalse(true));

/* Comparison with the Equality Operator. 
In equality comparison data type comprison will not take place. */

function testEqual(val) {
  if (val == 10) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(testEqual(10));

/* Comparison with the Strict Equality Operator.
In strict comparison data type comparison will also takes place. */

function testingStrict(valu) {
  if (valu === 7) {
    return "Check!";
  }
  return "Why Wrong!";
}
console.log(testingStrict(7));
console.log(testingStrict("7"));

/* Comparing them Both. */

function compareEquality(a, b) {
  if (a == b) {
    return "Equal";
  }
  return "Not so Equal";
}
console.log(compareEquality(10, "10"));

/* Comparing with the Inequality operator: */

function compareInequal(val) {
  if (val != 10) {
    return "Not Equal Bro!";
  }
  return "Equal Bro!";
}
console.log(compareInequal(100));

/* Comparing with the strictly Inequality operator: */
function compareStrictInequal(vaalu) {
  if (vaalu !== 10) {
    return "Not Equal Bro!";
  }
  return "Equal Bro!";
}
console.log(compareStrictInequal("10"));
console.log(compareStrictInequal("100"));
