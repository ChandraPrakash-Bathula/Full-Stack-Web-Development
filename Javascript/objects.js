/* Javascript Objects: Objects are similar to arrays except the fact that these data values are accessed through properties through Object Notation.*/

var myObj = {
  name: "Chiranjeevi",
  profession: "Actor",
  title: "Mega Star",
  friends: ["Everyone", "Everything!"],
  phone: 3147030209,
};
/* Objects can contain integers, numbers, arrays, floats, booleans and strings. */
console.log(myObj.name);
console.log(myObj.friends[1]);

var objTesting = {
  Cap: "Cowboy Hat",
  jeans: "Bell Bottom",
  Boots: "Cowboy Fit Shoes",
};

console.log(objTesting.Cap); //accessing through Dot Notation
console.log(objTesting["jeans"]); //accessing through bracket notation.

/* In arrays we access data through index and in here we access the data through property that's the only difference. */
/* Accessing Object Properties with Variables: */

var objTest = {
  7: "M.S.Dhoni",
  10: "Sachin Tendulkar",
  18: "Virat Kohli",
};
var playerJersey = 7;
var playerName = objTest[playerJersey];
console.log(playerName);

/* Updating the Object Properies: */

var oneObj = {
  name: "Chiru",
  title: "Boss",
  rank: 1,
  friends: ["Everyone"],
};
oneObj.friends[0] = "Not everyone I guess.";
// can update values through dot notation and assignment operator
console.log("Friends with Chiru, is it everyone ? : " + oneObj.friends[0]);

/* Add New Properties to on object: This is possible through dot notation and bracket notation both. */

var editObj = {
  name: "Chiru",
  title: "Boss",
  rank: 1,
  friends: ["Everyone"],
};
editObj.profession = "Acting";
editObj["friends"[1]] = ["All Good People"];
console.log(editObj);

/* Deleting properties from an object. */
var delObj = {
  name: "Chiru",
  title: "Boss",
  rank: 1,
  friends: ["Everyone"],
  habits: "Fighting Enemies",
};
delete delObj["friends"];
console.log(delObj);
delete delObj.habits;
console.log(delObj);

/* Using Objects for Lookups: */
