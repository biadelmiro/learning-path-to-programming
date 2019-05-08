/*
There are two different ways to declare a function in javascript:

FUNCTION DECLARATION: we declare a function giving a name to it.
EX.:

function catSays(max) {
  //code here
}

FUNCTION EXPRESSION:(Anonymous funtion) We declare a variable and store the func-
tion inside the variable. The function no longer has a name assigned to it.
EX.:

var catSays = function(max) {
  //code here
}
*/

/*If we try to access the value of the variable catSays, the function will return
catSays*/

var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

console.log(catSays);

/*
Deciding when to use a function expression and when to use a function declaration
can depend on a few things. But, one thing you'll want to be careful of, is hois-
ting.

All function declarations are hoisted and loaded before the script is actually
run. Function expressions are not hoisted, since they involve variable assign-
ment, and only variable declarations are hoisted. The function expression will
not be loaded until the interpreter reaches it in the script.
*/

//1º Function written

function cat() {
  console.log(meow(2));
  var meow = function(max) {
    var catMessage = '';
    for(var i = 0; i < max; i++) {
      catMessage += 'meow';
    }
    return catMessage;
  }
  function purr() {
    return 'purrrr!'
  }
}
cat();

//2º Function Hoisted.

function cat() {
  function purr() {
    return 'purrrr!'
  }
  console.log(meow(2));
  var meow = function(max) {
    var catMessage = '';
    for(var i = 0; i < max; i++) {
      catMessage += 'meow';
    }
    return catMessage;
  }
}
cat();

/*
NOTE that, in the 2nd code snippet, the funtion purr() was hoisted as what
happens with any function declaration and variable declaration. BUT, the line
49, var meow = = function(max) wasn't, because in these conditions this fragment
of code don't represent a variable declaration, but a FUNCTION EXPRESSION, and
HOISTING only happens on FUNCTION DECLARATIONS and VARIABLE DECLARATIONS. Since
function expressions can't be used before you define them.
even though the variable name is hoisted, the definition isn't. so it's undefined.
*/
