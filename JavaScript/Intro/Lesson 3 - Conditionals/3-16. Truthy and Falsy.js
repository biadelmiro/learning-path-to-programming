/* "Every value in JavaScript has an inherent boolean value. When that value is
evaluated in the context of a boolean expression, the value will be transformed
into that inherent boolean value."

The values evaluated as falsy are the followings: false, null, undefined, 0, "",
NaN.

The empty quotes ("") are false because in a boolean context, a string was decla-
red but no value was assign to it. When the interpreter has a variable with no
value assign to it, the result is 'NULL'.

NOTE that if we set quotes (" ") with space, the interpreter will return a TRUE.
This is because inside the string variable was declared -even if not seen-
a blank space that actually, to the interpreter, has a value in ASCII or decimal.

However there is the truthy values. These values are any other value distinct
than the falsy ones.
*/
if ("") {
  console.log("The value is truthy.");
} else {
  console.log("The value is Falsy.");
}
