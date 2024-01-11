/* Reusable Code with Functions(): */

function thisFunct() {
  //In this we will have the function keyword first then the name we need to give and paranthesis () and curly braces in which the logic happens and finally calling the function at the end.
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
