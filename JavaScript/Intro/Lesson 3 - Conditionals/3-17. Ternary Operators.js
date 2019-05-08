/* IF...ELSE

Using if(isGoing) is the same as using if(isGoing === true). Alternatively,
using if(!isGoing) is the same as using if(isGoing === false). This code is ra-
ther lengthy.
*/
var color;

if (isGoing) {
  color = "green";
} else {
  color = "red";
}

console.log(color);

/* TERNARY OPERATORS

conditional ? (if condition is true) : (if condition is false)

? -> equivalent to if(){} statement.
: -> equivalent to else {} statement.

The conditional goes on the left-side of the ?, the code that runs when the con-
dition is true goes between ? and :, and on the right side of the :
*/

var isGoing = true;
var color = isGoing ? "green" : "red";
console.log(color);

/* EXAMPLE

var adult = true;
var preOrder = true;

console.log("It will cost " +(adult ? "$40.00" : "$20.00") + " to attend the concert. Pick up the tickets at the " + (preOrder ? "will-call." : "gate."));
*/
