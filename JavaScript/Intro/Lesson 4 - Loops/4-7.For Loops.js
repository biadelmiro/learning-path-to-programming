/* At first, the variable 'i' is set to 0 inside the conditional statement. It's
 the only time this part of the code runs. Then, the 2nd part (i<6) is checked
 and, if it's true, it will run the code inside the coditional scope, then it re-
 turns inside to the conditional statement and executes the last part (i++), rai-
 sing i by 1, comparing to (i<6) and executing or not the conde inside.

 for ( start; stop; step ) {
    do this thing
 }

*/

for (var i = 0; i < 6; i++) {
  console.log("The value of i is: "+i);
}
