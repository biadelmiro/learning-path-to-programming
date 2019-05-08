/*A loop, consists in doing basically the same thing: repeat a part of code.
The main pieces of a loop must contain is:

When to start: The code that sets up the loop.
When to stop: The logical condition to test whether the loop should continue.
How to get to the next item: The incrementing or decrementing step.

Example:
*/ 

var start = 0; // when to start
while (start < 10) { // when to stop
  console.log(start);
  start = start + 2; // how to get to the next item
