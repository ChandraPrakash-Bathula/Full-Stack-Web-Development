var fName = "Chandra Prakash";
var lName = "Bathula";

console.log(fName + " " + lName);

/* Escaping Literal Quotes in Strings: 
 We can use the \ symbol to escape the quote being last character in the javascript: \ symbol here identifies as the quotation marks */

var mystr = 'I am a string " in a string " Bro!';
var sentence =
  "See here the even we have multiple Quotation marks we got the sentence by using this symbol  ";
console.log(sentence + " : " + mystr);

/* Quoting with single quotes: Instead of sing the symbol \ we can also utilize the single quotes here; */

var iString = '<a href="https://google.com" target="_blank">Link</a>';

console.log(iString);

/* One more interesting thing to do is we can use both "" & '' by using the backticks `` */

var seeString = `'<a href="https://google.com" target="_blank">Link</a>'`;

console.log(seeString);

/* Escape Sequences in Strings: */

/****
 CODE OUTPUT
 \'    Single Quote
 \"    Double Quote
 \n    New Line 
 \\    Backslash
 \r    carriage return
 \f    form feed
 \t    tab
 \b    backspace
  ****/

var stringg = "FirstLine\n\t\\secondline\t\\\r";
console.log(stringg);

/* Concatetinating Strings with + operator: */

var myStr = "This is a string " + ". And so is this.";

console.log(myStr);

/* Concatenating with = operator */

var thisString = "Hey Bro!";

thisString += " You are Good.";

console.log(thisString);

/*Contsructing strings with variables. */

var string1 = "I am Chandu.";
var string2 = string1 + " What's your name ?";

console.log(string2);

/* Appending variables to Strings. */

var anAdjective = "Beautiful.";
var strin = "This flower is ";
strin += anAdjective;

console.log(strin);

/*Find Length of the String.*/

var poineer = "ThisIsAStringBro!";
console.log(poineer.length);

/*Bracket Notation to Find First Character in the String.
In programming first number starts with 0 and last character can be found through length - 1.*/

var stringCharacter = "String";

console.log(stringCharacter[0]);
console.log(stringCharacter[1]);
console.log(stringCharacter[5]);

/*String Immutability: Strings can be created and changed but not manipulated or changed individually in characters*/

var wrongString = "Jello Javascript";
// wrongString[0] = 'H' ; This is not possible
wrongString = "Hello Javascript";
console.log(wrongString);

/*Bracket Notation to find the Nth Character in the string.*/

var firstString = "Harvey";
var thirdLetterOfFirstString = firstString[2];
console.log(thirdLetterOfFirstString);

/*Bracket Notation to find the Last character in the string.*/

var lastName = "Bathula";
var lastCharacter = lastName[lastName.length - 1];
console.log(lastCharacter);

/*Bracket Notation to find Nth to Last character in a string. 
We can simply embed the digit on the minus side to get how far from the last digit we need.*/
var fullName = "Chandra Prakash Bathula";
var last2secondChar = fullName[fullName.length - 2];
console.log(last2secondChar);

/*Word Blanks : */

function wordBlank(noun, adjective, verb, adverb) {
  var finalResult = "";
  finalResult +=    "A " + adjective + " " + noun + " " +  verb + " to the garden " + adverb + ".";
  return finalResult;
}
console.log(wordBlank("cat", "small", "walking", "slowly"));
console.log(wordBlank("Dog", "Big", "Running", "Quickly"));
