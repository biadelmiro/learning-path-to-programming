/*
This code verifies if an 'x' number declared is divisiible by 3 or 5 or both,
using the % (module) operator. The module operator divides one number by another
and returs a ramainder of that division. If it return no remainder, than x is di-
visible by y (x/y = 0)

REMEMBER to use STRICT EQUALTY to compare the values of conditionals. Letting the
interpreter use IMPLICIT TYPE COERTION may cause errors in the code.
*/

var x = 0;

while (x <= 20) {
  if ( x%3 === 0 && x%5 === 0) {
    console.log("FizzBuzz!!");
  } else if ( x%3 === 0  ) {
    console.log("Fizz!");
  } else if ( x%5 === 0) {
    console.log("Buzz!");
  } else {
    console.log(x);
  }

/*
The increment always go inside the 'while' condition, before close curly braces.
After that, another code unrelated to the conditional will be executed.
*/
x += +1;
}

//The same code can be written shortly using TERNARY OPERATORS

var x = 0;
while (x <= 20) {
  console.log(x%3 === 0 && x%5 === 0 ? "FizzBuzz!" : x%3 === 0 ? "Fizz!" : x%5 === 0 ? "Buzz!" : x);
x += +1;
}
