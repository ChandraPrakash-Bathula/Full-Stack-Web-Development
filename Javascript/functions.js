/* Reusable Code with Functions(): */

function thisFunct() {
    //In this we will have the function keyword first then the name we need to give and paranthesis () and curly braces in which the logic happens and finally calling the function at the end.
    console.log('Bro working !');
}
thisFunct();

function myfunction(){
    alert('Bro'); //This is a popup.
}
myfunction();

/* Passing values to the functions with arguements: 
Parameters are the variables acts as the placeholders for the values that are to be input to a function, when it is called. */

function mathFunct(a,b){ 
    /* Here a & b are parameters; They can be used for the logic first and at the time of calling we can addign values and then the function logic will happen as per the values. */
    console.log(a-b);
}
mathFunct(100,19);

function functWithMultiple(a,b,c){
    console.log(a+b*c);
}
functWithMultiple(12,24,63);

/* Global Scope and Functions: 

Scope refers to teh visibility of the variables. 
Variables which are define outside the function block has global scope 
and that variables that are defined inside the function are in the parameters block has a 
local scope.

Global scope means we can see them everywhere but the local has visibility in that particular function. */

var myglobal = 12;

function funct1(){
 var oopsglobal = 14;   
 /*Incase if we don't give var keyword then that variable will be a global variable. */
};

function funct2(){ //Global
    var output = "";
    
    if (typeof myglobal != 'undefined'){
        output += 'myglobal : ' + myglobal;
    }
    if (typeof oopsGlobal != 'undefined'){
        output += 'oopsglobal : ' + oopsglobal;
    }
    console.log(output);
}
funct1();
funct2();

//Local:

function localScope(){
    var myvar = 12;
    console.log(myvar);
}
localScope();
console.log(myvar); //Throws an error.