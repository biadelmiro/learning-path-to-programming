/* Switch statement can be used when we don't want to repeat ELSE...IF statements
all the time to a unique variable value. It may be handy to prevent the interpre-
ter to look inside every if...else checking for the condition to be satisfied.
*/



/*  IF...ELSE EXAMPLE
In this case below, we have a fixed variable value and our code has to checking
inside all statements untill it reaches the value of 3*/

var apple = 3;

if (apple === 1) {
  console.log("You have 1 apple");
} else if (apple === 2) {
  console.log("You have 2 apples");
} else if (apple === 3) {
  console.log("You have 3 apples");
} else if (apple === 4) {
  console.log("You have 4 apples");
} else {
  console.log("You have more than 4 apples");
}



/* SWITCH CASE EXAMPLE

 To prevent this kind of repetition above, we can write this code

If we want to stop the execution when the code reach the variable value, a BREAK
must be set at the end of each case. Otherwise the code will keep running right
after the variable value, what is called 'falling-trough'. The last break is not
needed.

DEFAULT can be added at the end of the algorithm to print any other result that
were not ins case statements.
*/

var apple = 3;

switch (apple) {
  case 1:
    console.log("You have 1 apple");
    break;
  case 2:
    console.log("You have 2 apples");
    break;
  case 3:
    console.log("You have 3 apples");
    break;
  case 4:
    console.log("You have 4 apples");
    break;
  case 5:
    console.log("You have 5 apples");
    break;
  default:
    console.log("Whoa! That's a lot of apples you have out there.");
}
