/* Arrays: Store multiple values with arrays.
It starts with [ and ends with ] we can have any no.of elements and elements can be of any type of datatypes. */
var array = ['John', 4, 'wick', 'Bro'];
console.log(array);

/* Nested Arrays: An array in another is called a nested array or a multi-dimensional array. */

var ourArray = [['John', 'wick', 4, 'Bro'], ['everything', 101019010], 'kinguu'];
console.log(ourArray);
console.log(ourArray[1][0]);

/* Access Array Data with Indexes: */

var oneArray = [10, 20, 70];
var myArray = oneArray[1];
console.log(myArray);

/* Modify Array Data with Indexes: */

var thisArray = [10, 20, 30, 40, 0];
thisArray[4] = 50;
console.log(thisArray);

/* Access Multi Dimensional Arrays with Indexes: */

var multiArray = [[1, 2, 10, 20, 30], 'string', [12, 34, 23, 45, 56]];
multiArray[2][1] = 'why Bro?'
console.log(multiArray);

// Here first [] is for the Array's element position and the second [] is for the Array's array element.

var ourData = multiArray[0][1]; 
console.log(ourData);

/* Manipulate Arrays with push():
We can append the data at the end of the array using push() function. */

var pushFunctionArray = [[1,2,3],'Bro',[2,3,4],[[24,68],90]];
var nonsense = 6;
pushFunctionArray.push(['All','these',nonsense],78);
console.log(nonsense);
console.log(pushFunctionArray);
pushFunctionArray.push('string Bro!');
console.log(pushFunctionArray);


/* Manipulate Arrays with pop(): 
pop() function removes the last element in the array. */

var popFnctArray = [1,2,3,4,5,6,7,8,9,0];
var anyArray = popFnctArray.pop();

console.log(anyArray);
console.log(popFnctArray);

/* Manipulate Arrays with shift(): 
shift() function removes the first element in the array. */

var shiftFunctArray = [1,3,5,7,9,0];
var resultOfShift = shiftFunctArray.shift();
console.log(shiftFunctArray);
console.log(resultOfShift);

/* Manipulate Arrays with unshift(): 
unshift() function adds element in the beginning of the array. */

var unshiftFunct = ['string','king','kong',4];
unshiftFunct.unshift('Ohh! ho that aah',['I','Dont','know',2]);
console.log(unshiftFunct);

/* Shopping List Example : */

var shoppingList = [['milk',3],['Veggies',2],['Sourdoughbread',1],['eggs',60]];
console.log(shoppingList);