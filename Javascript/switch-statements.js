/* Switch Statements: strict operation checking process will be done in switch cases. */

function testingSwitch(value) {
    var result;
    switch (value) {
        case 1:
            result = 'alpha';
            break;
        case 2:
            result = 'beta';
            break;
        case 3:
            result = 'gama';
            break;
        case 4:
            result = 'delta';
            break;
    }
    return result;
}
console.log(testingSwitch(1));

/* Default Option in Switch Statements: */
function defaultInSwitch(val) {
    var result = '';
    switch (val) {
        case 'a':
            result = 'Animal';
            break;
        case 'b':
            result = 'breakthrough!';
            break;
        case 'S':
            result = 'Jai Shree Ram, Jai Janaki Maa !';
            break;
        case 'H':
            result = 'Jai Hanuman !';
            break;
        case 'I':
            result = 'Omnipresent';
            break;
        case 'J':
            result = 'Jiraffe';
            break;
        case 'Y':
            result = "You're Omnipresent";
        default:
            result = 'All is Well!'
    }
    return result;
}
console.log(defaultInSwitch('S'));

/* Multiple Identical Options in Switch Statements: */

function sequenceOfSizes(valu) {
    var result = '';
    switch (valu) {
        case 1:
        case 2:
        case 3:
            result = 'Low';
            break;
        case 4:
        case 5:
        case 6:
            result = 'Medium';
            break;
        case 7:
        case 8:
        case 9:
            result = 'High';
            break;
        default:
            result = 'Bro !'
    }
    return result;
}
console.log(sequenceOfSizes(11));

//Replacing If-else Chains with Switch. 

function ifToSwitch(valu) {
    var result;
    switch (valu) {
        case 'bob':
            result = 'Marley';
            break;
        case 42:
            result = 'The Answer';
            break;
        case 1:
            result = 'There is no #1';
            break;
        case 99:
            result = 'Missed me by this much!';
            break;
        case 7:
            result = 'Ate Nine';
            break;
        default: result = 'Edo Okati Ley Bro!';
    }
    return result;
}
console.log(ifToSwitch(7));

/* Returning Boolean Values from functions: */
function isGreat(a, b) {
    if (a < b) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isGreat(9, 18));

// This can also be written as:
function isLess(a, b) {
    return a > b;
}
console.log(isLess(9, 7));

/* Returning Early Pattern From Functions: */

function testingAB(a, b) {
    if (a < 0 || b < 0) {
        return 'Undefined';
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(testingAB(3, 33));

/* Counting Cards: */

var counting = '';
function blackJack(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            counting++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            counting--;
            break;
    }
    var betHold = 'Hold the Bet';
    if (counting > 0) {
        betHold = 'Do the Bet';
    }
    return counting + ' ' + betHold;
};

blackJack(2);
blackJack(4);
blackJack(5);
blackJack(7);
blackJack(10);
blackJack('K');
blackJack('A');
console.log(blackJack(2));