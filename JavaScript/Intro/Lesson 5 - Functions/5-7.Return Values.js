/*It’s important to understand that return and print are not the same thing.
Printing a value to the JavaScript console only displays a value (that you can
view for debugging purposes), but the value it displays can't really be used for
anything more than that.
*/

function isThisWorking(input) {
  //this is a function inside a function.
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!";
}

isThisWorking(3);

/*In the example above, the function 'isThisWorking' was called, the argument '3'
 was passed to the parameters and returned the string "Returning: I am returning
 this string!", but the argument (value) 3 is never returned. only printed.

 WHEN A FUNCTION DOESN'T RETURN ANY VALUE IT RETURNS UNDEFINED BY DEFALUT
 BECAUSE NO RETURNING VALUE WAS DEFINED.*/

 function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
}

function test() {
  return 1;
  return 2;
}

test();

/*It's important to notice that the the fist return value will make the interpre-
ter stop the function execution, exit the function and returning a value to the
caller. If nothing is define as a value to retun back, UNDEFINED is gonna be re-
turned back automatically*/

/*In this case, the value '1' will be returned even if no arguments is passed,
bacause the function return the first value that it has and finishes.


/* REMEMBER THAT:

console.log() is a function and it will always return 'undefined' when we call
it.

Any function will return some value back to the caller. If a return value is not
specified, then the function will just return back UNDEFINED. In other words, we
passed a value - let's say 10 - as an argument to the function console.log(10),
the console.log(10) will assign this argument (10) to it's parameters and show
us 10, because of what was passed to it, and also undefined, because we did not
specified a value to console.log() return.

When the function returns the value to the caller, it is printed with the type
together, instead just only the value inside the data type wich happens when we
pass any value as argument to the console.log().
*/

//EX.:

function printName(name) {
    var x = 'that\'s my name';
  console.log('my name is ' + name);
    return x;
}

printName('rafael')

my name is rafael //console.log() prints only the value inside the string type.
"that's my name" //return prints all the value along the data type.

/*It can occur with any other data types, but may not be so visible. Strings are
easier to identify becasuse they are always inside single '' or double "" quotes
but are always returned with double " ".
 */
