/* 
The Value of "this", inside the object method that it was called, is the value of the object 
itself . In other words, "this" refeers to the objects itself when in side the method of the 
object 
*/

const chameleon = {
    eyes: 2,
    lookAround: function () {
       console.log(`I see you with my ${this.eyes} eyes!`);
    }
  };
  
  chameleon.lookAround();
//retrieving the values of eyes property
//the value of `this` is the chameleon's object property called eyes.

/* 
On the other hand, when this is not a method (not inside an object), we call it a function 
and we using "this" to set a property 
*/

function whoThis () {
    this.trickyish = true
  }
  
  whoThis();

//Setting the value "true" inside trickyish.
//the values of this, now, is trickyish.

/*
Since the lookAround is a method, it is invoked as a property of the chameleon object
whoThis is not a method because it not inside any object. It's a plain regular function.
Since its a function, it's invoked using the parenthesis: whoThis();

How the function is invoked determines the value of this inside the function.

When we invoke a method, this will assume a value of local object with the objects property 
values. "this" will be the chameleon object ITSELF!!

When invoke a function, this will assume global values (window) with all possible values for
"this", and inside of it, will be define the function whoThis();

The object "window" is provided by the browser environment and is globally accessible to your 
JavaScript code using the identifier, window. This object is not part of the JavaScript 
specification. Instead, it is developed by the W3C.
*/


const car = {
    numberOfDoors: 4,
    drive: function () {
       console.log(`Get in one of the ${this.numberOfDoors} doors, and let's go!`);
    }
  };
  
  const letsRoll = car.drive;
  
  letsRoll();

/* 
In the example above, the output will be the "window" object "this". Even though car.drive
is a method, it is stored inside a variable called letsRoll. Since letsRoll is called as a regular
function outside the method, "this" will refer to the window object inside of it. 
*/

/* GLOBAL VARIABLES ARE PROPERTIES ON WINDOW

Since the window object is at the highest (i.e., global) level, an interesting thing happens with 
global variable declarations. Every variable declaration that is made at the global level (outside 
of a function) automatically becomes a property on the window object!

If we check the property against the variable name, it will return true.

var eating = 'avocado';
window.eating === eating
//true */

/* Globals and var, let, and const

var: Old
Let, const: ES6+

Declaring var will add this to the global window Object.
Declaring let, and const won't add this to the window object 

let eating = 'avocado';
window.eating === eating;
//false

*/

/* GLOBAL FUNCTIONS ARE METHODS ON WINDOW 

Any global function declaration and var are accessible on the window object as method,
but only the function will be available in the window object.
Function inside function and function's variables can not be accessed via window
object since it's note a global declaration.
*/

/* AVOID GLOBALS
Global vaiables is not ideal; It's not a good practice. The two main reasons are:

Tight coupling(pairing of two items together) -> The code is too dependent on detais of each other.
Change one code, unintentionally, may change the functioning on other.

Name collisions -> When two or more functions depend on a variable with the same name. Both functions
will try to update or set the variable name, overriding the changes made by each other.
*/