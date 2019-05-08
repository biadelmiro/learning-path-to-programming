/*
For each value of x in the outer loop, the inner for loop executes completely.
The outer loop starts with x = 0, and then the inner loop completes it's cycle
with all values of y.
*/

for (var x = 0; x < 5; x = x + 1) {
  for (var y = 0; y < 3; y = y + 1) {
    console.log(x + "," + y);
  }
}
