/*
FUNCTION AS PARAMETERS

CALLBACK: A function that is passed(stored) into another function.

Being able to store a function in a variable makes it really simple to pass the
function into another function.

*/

// function expression catSays
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
helloCat(catSays);

/*
we can create named or Anonymous(nameless) function expressions. Named FUNCTION
expressions can't be called by it's name. If do, we'll get an reference error
message.
*/
var favoriteMovie = function movie() {
  return 'movie name';
}
//Calling the function using the variable name
favoriteMovie();
