/*"Sometimes your JavaScript code will produce errors that may seem counterintui-
tive at first. Hoisting is another one of those topics that might be the cause
of some of these tricky errors you're debugging."

"JavaScript hoists function declarations and variable declarations to the top
of the current scope."
"Variable assignments are not hoisted."
"Declare functions and variables at the top of your scripts, so the syntax and
behavior are consistent with each other."

HOISTING ("hasteamento" ou "elevar ao topo" em pt-BR):

It's basically, conceptually speaking, the way of JavaScript to put the variable
and function declarations to the top of the scope. This won't affect our written
code. Technically "the variable and function declarations are put into memory
during the compile phase.", but stay exactly were we wrote.
*/

//EX. 1


//Function declaration
function catName(name) {
  console.log("My cat's name is " + name);
}
//funtion call
catName("Tigger");

//EX.2

//function call
catName("Tigger");
//function declaration
function catName(name) {
  console.log("My cat's name is " + name);
}

//Both code snippets will result in the same output: "My cat's name is Tigger"

//EX. 3

function do_something() {
  console.log(bar); // undefined
  var bar = 111;
  console.log(bar); // 111
}

// is implicitly understood as:
function do_something() {
  var bar;
  console.log(bar); // undefined
  bar = 111;
  console.log(bar); // 111
}
