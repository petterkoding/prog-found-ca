// question 1: Declare and initialise a variable with a string value.

// answer 1:

var coffee = "starbucks";

// question 2: Create an object variable called person and give it two properties
// (a key and a value) of your choice.

// answer 2:

var person = {
  name: "Petter",
  age: 30,
};

// question 3: Create a variable called outOfStock and assign it a boolean value.

// Create an if else statement that checks the value of outOfStock.

// If it is true, console log "Out of stock". Otherwise log "In stock".

// answer 3:

var outOfStock = true;

if (outOfStock === true) {
  console.log("Out of Stock");
} else {
  console.log("In stock");
}

// question 4: Create an array of five numbers.

// Loop through the array and console log each value.

// answer 4:

var numberArray = [1, 2, 3, 4, 5];

for (var i = 0; i < numberArray.length; i++) {
  console.log(numberArray[i]);
}

// question 5: Create a for loop that counts from 15 to 25.
// Console log the value of the counter variable inside the loop.

// answer 5:

for (var count = 15; count <= 25; count++) {
  console.log(count);
}

// question 6: Using the same loop from the above question, only log the value of the
// counter variable if it is equal to 20.

// answer 6:
for (var count = 15; count <= 25; count++) {
  if (count === 20) {
    console.log(count);
  }
}

// question 7: Create an array of two objects.
// Each object must have the same three properties(with different values):
// one property with a string value
// one property with a number value
// one property with a boolean value
// Loop through the array and console log the number value and the boolean value.

// answer 7:

var id = [
  {
    name: "Jack",
    age: 25,
    married: false,
  },
  {
    name: "Jacob",
    age: 33,
    married: true,
  },
];

for (var i = 0; i < id.length; i++) {
  console.log(id[i].name);
  console.log(id[i].married);
}
// question 8: Create a function called whatIDontLike that accepts one argument. Choose a good name for the argument.

// Inside the function, log the string "I don't like " together with the argument.

// Call the function and pass in a value of your choice.

// answer 8:

function whatIDontLike(dislike) {
  console.log("I don't like " + dislike);
}

whatIDontLike("rain");

// question 9: Create a function that accepts two arguments.

// Inside the function, subtract the second argument from the first and console log the result.

// answer 9:

function myFavoriteFoods(number1, number2) {
  var result = number1 - number2;
  console.log(result);
}

// question 10: Create an empty array.

// Create a function that accepts one argument.

// Inside the function, add the argument to the array.

// Call the function and pass in a value of any type.

// answer 10:

var fishInTheSea = [];

function newSpecies(specimen) {
  fishInTheSea.push(specimen);
}
newSpecies("tuna");
