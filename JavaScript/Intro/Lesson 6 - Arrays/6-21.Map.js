var test = [
  12, 929, 11, 3, 199,
  1000, 7, 1, 24, 37,
  4, 19, 300, 3775, 299,
  36, 209, 148, 169, 299,
  6, 109, 20, 58, 139,
  59, 3, 1, 139
];

/*
TThe map() method creates a new array with the results of
calling a provided function on every element in the calling array.
This method also allow a returning value.
*/

var mapping = test.map(function(number) {
  if (number % 3 === 0) {
    number += 100;
  }
  return number;
})

console.log(mapping);

/*
As we declared a function expression by assign the array to a variable,
we can call the function the that variable 'mapping();' name to manipulate an individual
element, or do whatever we want.
*/
