/* Comparisons with the Logical and Operator. */

function testingGreaterValue(value) {
  if (value > 100) {
    return "Over 100";
  }
  if (value > 10) {
    return "Over 10";
  }
  return "10 or Under";
}
console.log(testingGreaterValue(10));
console.log(testingGreaterValue(1000));
console.log(testingGreaterValue(9));

/* Comparison with the greater than or equal to operator. */

function testingBro(val) {
  if (val >= 100) {
    return "100 or Greater";
  }
  if (val >= 10) {
    return "10 or Greater.";
  }
  return "Less than 10.";
}
console.log(testingBro(12));
console.log(testingBro(1));
console.log(testingBro(100));

/* Comparison with the Less than operator. */

function lessThan(valu) {
  if (valu < 30) {
    return "Under 30";
  }
  if (valu < 60) {
    return " under 60";
  }
  return "More than 60";
}
console.log(lessThan(23));
console.log(lessThan(100));
console.log(lessThan(56));

/* Comparison with the Less than or equal to operator. */

function lessThanEqual(valu) {
  if (valu <= 30) {
    return "30 or Under";
  }
  if (valu <= 60) {
    return "60 or under";
  }
  return "More than 60";
}
console.log(lessThanEqual(23));
console.log(lessThanEqual(100));
console.log(lessThanEqual(56));

/* Comparison with Logical And Operator. */

function testingAnd(val) {
  if (val <= 50) {
    if (val >= 25) {
      return "Value is between 25 and 50";
    }
  }
  return "Both are false";
}
console.log(testingAnd(23));

//The above function can be reduced by this :

function usingAnd(vall) {
  if (vall >= 25 && vall <= 50) {
    return "Value is between 25 and 50";
  }
}
console.log(usingAnd(34));

/* Comparisons with the Logical OR Operator */

function testingOR(vaal) {
  if (vaal < 10 || vaal > 20) {
    return "Outside";
  }
  return "Inside";
}
console.log(testingOR(20));

/* Else Statements: */

function testingElse(val) {
  var result = "";

  if (val > 5) {
    return "Value Greater than 5";
  } else {
    return "Value is smaller than 5";
  }
  return result;
}
console.log(testingElse(3));

/* Else-if Statements: */
function testingElseIf(val) {
  var result = "";

  if (val > 10) {
    return "Value Greater than 10";
  } else if (val < 5) {
    return "Value is smaller than 5";
  } else {
    return "Value is between 5 and 10.";
  }
}
console.log(testingElseIf(9));

/* Logical Order in If-Else Statement: */
function orderLogic(val) {
  var result = "";

  if (val < 5) {
    return "Value smaller than 10";
  } else if (val < 10) {
    return "Value is smaller than 10";
  } else {
    return "Greater than or equal to 10.";
  }
}
console.log(orderLogic(9));

/* Chaining If-Else Statements: */

function testingChain(valll) {
  if (valll < 5) {
    return "Tiny";
  } else if (valll < 10) {
    return "Small";
  } else if (valll < 15) {
    return "Medium";
  } else if (valll < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
console.log(testingChain(7));

/* Golf Code: */

var names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfGame(par, stroke) {
  if (stroke == 1) {
    return names[0];
  } else if (stroke <= par - 2) {
    return names[1];
  } else if ((stroke = par - 1)) {
    return names[2];
  } else if ((stroke = par)) {
    return names[3];
  } else if ((stroke = par + 1)) {
    return names[4];
  } else if ((stroke = par + 2)) {
    return names[5];
  } else if (stroke >= par + 3) {
    return names[6];
  }
}
console.log(golfGame(7, 2));
