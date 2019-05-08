/*Functions are lines of code that can be reused, and allow us to call only it's
name to perform a sequence (a determined function, as the name sugests).

-Functions can return or not return a value.
-A function that doesn't return any value have an empty parentheses, like the exam-
ple below.
-A function that returns a value, has to be this value declared inside the para-
meters
-A value declared inside the parameters are called argument.
-The parameters are variable names inside the parentheses. It can be one variable
or more than one. To separe more than one variable, we use commas (,).
-The arguments are values of any type that is passed to the functions parameters.
*/

//EXAMPLE
/*
// x and y are parameters in this function declaration
function add(x, y) {
  // function body
  var sum = x + y;
  return sum; // return statement
}

// 1 and 2 are passed into the function as arguments
var sum = add(1, 2);

console.log(sum);
*/

function fullName(firstName, surename) {
  var name = firstName + " " + surename;
  return name;
}
console.log(fullName("My", "Name"));
