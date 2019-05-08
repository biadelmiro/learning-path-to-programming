/*Global scope

A global variable can be accessed at any level of the scope. Inside any function
inside other function.

Function scope

A local variable that can only be accessed by the holds it's value or any function
inside it. But not any function outside/above.

*/

var a = 1;
function x() {
  var b = 2;
  function y() {
    var c = 3;
    function z() {
      var d = 4;
    }
    z();
  }
  y();
}

x();


/* 'C' can be printed both in y() and z(), but not in x() or any other function
above becasue the value of 'c' is not visible to them, once 'c' is one level lower
than x()*/ 
