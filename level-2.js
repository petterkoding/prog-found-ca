// level 2

//  question 1: Using the loop from question 5 above, only log the counter variable if it is an even number.

// answer 1:

for (var count = 15; count <= 25; count++) {
  if (count % 2 === 0) {
    console.log(count);
  }
}

// question 2: Create a function that logs the sentence "I am a function".

// Assign this function to a variable called innerFunction.

// Create another function called outerFunction that accepts one argument.

// Inside outerFunction, call the argument like you would a function - with parenthesis ().

// Call outerFunction and pass in the innerFunction variable.

// answer 2:

function newFunction() {
  var innerFunction = newFunction;
  console.log("I am a function");
}

function outerFunction(outer) {
  outer();
}
outerFunction(newFunction);

// option 2,

var innerFunction = newFunction;

function newFunction() {
  console.log("I am a function");
}
function outerFunction(outer) {
  outer();
}
outerFunction(newFunction);

// option 3,

function newFunction() {
  console.log("I am a function");
}

var innerFunction = newFunction;

function outerFunction(outer) {
  outer();
}
outerFunction(newFunction);

// does it matter where I write the code for var = innerFunction = newFunction; ??????
// they all seem to end with the same result

// updated!
