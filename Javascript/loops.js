/* Iterate Through an Array with a For Loop: */

var iterateLoop = [2, 3, 4, 5];
var anyTotal = 0;

for (var i = 0; i < iterateLoop.length; i++) {
    anyTotal += iterateLoop[i];
}
console.log(anyTotal);

/*With While Loop */

var i = 0;
while (i < iterateLoop.length) {
    anyTotal = anyTotal + iterateLoop[i];
    i++;
}
console.log(anyTotal);

/* Nesting For Loops: */

function multiplyingArray(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product = product * arr[i][j]; // product *= arr[i][j]
        }
    }
    return product;
}
var product = multiplyingArray([[1, 2], [3, 4], [5, 6, 7]]);
console.log(product);

/* Iterate with Do While Loops: Do-While loop will run atleast once before it checks the condition.*/

var someArray = [];
var i = 10;

do {
    someArray.push(i);
    i++;
} while (i < 5)
console.log(i, someArray);

/* Profile Look Up: */

var contact = [
    {
        'fname': 'Akira',
        'lname': 'Nandhan',
        'phone': '714-237-9260',
        'likes': ['Pie', 'Decoding', 'Brownie']
    }, {
        'fname': 'Sherlock',
        'lname': 'Holmes',
        'phone': '123-456-7890',
        'likes': ['Shake', 'Mathing', 'Cookies']
    },
    {
        'fname': 'Harry',
        'lname': 'Potter',
        'phone': '989-908-007',
        'likes': ['Magic', 'Hagrid', 'Hogwarts']
    },
    {
        'fname': 'Justin',
        'lname': 'Beiber',
        'phone': '2098967860',
        'likes': ['Apple Pie', 'Statinstine', 'Oreo']
    }
];

function lookUprofile(name, prop) {
    for (var i = 0; i < contact.length; i++) {
        if (contact[i].fname === name) {
            return contact[i][prop] || 'No Such Property'
        }
    }
    return 'No Such Contact'
};
var data = lookUprofile('Harry', 'lname');
console.log(data);

/* Generate Random Fractions: Math.random() random number generators. */

function randomFraction() {

    return Math.random();
}
console.log(randomFraction());

/* Generate Random Whole Numbers: Math.floor() sums up to the nearest whole neumber */

var randomNumbersBetween0and21 = Math.floor(Math.random() * 20);
console.log(randomNumbersBetween0and21);
function randomWholeNum() {

    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());

/* Generate A Random Whole Numbers within a Range. */

function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
console.log(ourRandomRange(1, 9));

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(5, 15);
console.log(myRandom);

/* Use the parseInt Function: This converts strings to integers. */

function convertToInteger(str) {
    return parseInt(str);
}

console.log(convertToInteger('123'));

/* Use the parseInt Function with a Radix: Radix specifies the base of the number in the string. */

function convertToInteg(num) {
    return parseInt(num, 2)
}
console.log(convertToInteg('10011')); //Now the computer knows it as a binary number.

/* Use the Conditional (Terinary) Operator: This is like a one-line if-else operator.

Condition ? statement-if-true : statement-if-false; */
function checkIfEqual(a, b) {
    if (a == b) {
        return true;
    }
    else {
        return false;
    }
}
console.log(checkIfEqual(2, '2'));

// Above one can also be written as:
function checkEqual(a, b) {
    return a === b ? true : false
}
console.log(checkEqual(3, 3.0));

/* Multiple Conditional Operators:
condition 1 ? Return Statement : condition 2 : Return statement : Else Condition. */
function checkingSign(integer) {
    return integer > 0 ? 'Positive' : integer < 0 ? 'Negative' : 'Zero Bro'
}
console.log(checkingSign(1));

function checkingBigger(number){
return number > 3 ? 'Bigger than 3' : number < 3 ? 'Smaller than 3' :'';
}
console.log(checkingBigger(8));