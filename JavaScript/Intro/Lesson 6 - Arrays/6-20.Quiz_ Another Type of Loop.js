var test = [
  12, 929, 11, 3, 199,
  1000, 7, 1, 24, 37,
  4, 19, 300, 3775, 299,
  36, 209, 148, 169, 299,
  6, 109, 20, 58, 139,
  59, 3, 1, 139
];

/*
forEach() method doesn't return any value. So, we can't declare a return
statement. Also, the console.log() must be insite the function. Said so,
this is a example of a inline function; To return some value, we must create
a method called map().
*/

test.forEach(function(number) {
  if (number % 3 === 0) {
    number += 100;
    console.log(number);
  }
})
