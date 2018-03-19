// Gives prompt to ask for user's name and says hi
var getName = function() {
	return prompt("what is your name?");
};

var userName = getName();

alert('Hi ' + userName);

// Subtracts two number
var subtract = function(number1, number2) {
	return number1 - number2;
  }

alert (subtract (10,5));

// Multiplies two numbers
var multiply = function (number1, number2) {
	return number1 * number2;
 };

 alert (multiply (2, 7));

 // Divides two numbers
 var divide = function (number1, number2) {
	return number1 / number2
}

alert (divide (10,2));

 // Gives remainder of two numbers
 var remainder = function (number1, number2) {
	return number1 % number2
}

alert (remainder (13,2));

// Three prompts which return a sentence
var userInputAge = prompt('How old are you?');

var userInputName = prompt('What is your name?');

var userInputFavoriteFood = prompt('What is your favorite food?');

var sentence = function(userAge, userName, userFavoriteFood) {
	alert (userName + " is " + userAge + " years old and their favorite food is " + userFavoriteFood);
};

sentence(userInputAge, userInputName,userInputFavoriteFood);
