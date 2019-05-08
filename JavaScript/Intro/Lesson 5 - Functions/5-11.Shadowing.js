/*The code below will print 4 as result, once the 'x' inside the function scope
is the same 'x' that was declared globally; not a new local variable x declared
inside the function. So, for beaing a global variable, 'x' will be seen and used
by all algorithm. THIS IS CALLED SHADOWING*/

var x = 1;

function addTwo () {
  x = x+2;
}
/* addTwo () {
  x = x+1;
} */
console.log(x);


/*To prevent shadowing, we simply declare a new variable that can have the same
name (once it's inside a inner function (local), won't be a problem). The global
'x' only will be seen by function at the same level as it or below and won't be
it's value modified by the expression inside the function addTwo, because that
'x' is a new variable declared inside that function and can't be in an outer le-
vel.*/

var x = 1;

function addTwo() {
  var x = x + 2;
}

addTwo();
x = x + 1;
console.log(x);


/*SHADOWING: when a inner variable has it's value replaced by an outer variable
value*/

/*If an identifier is declared in global scope, it's available everywhere.
If an identifier is declared in function scope, it's available in the function
it was declared in (even in functions declared inside the function).
When trying to access an identifier, the JavaScript Engine will first look in
the current function. If it doesn't find anything, it will continue to the next
outer function to see if it can find the identifier there. It will keep doing
this until it reaches the global scope.
Global identifiers are a bad idea. They can lead to bad variable names, conflic-
ting variable names, and messy code.*/
