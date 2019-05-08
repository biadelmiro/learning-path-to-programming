/*
Objects are data structures in javascript that lets you store data
about a particular thing, and helps you keep trancking that data using
a particular key.

We can declare an object by declaring it as a variable and assign
the inner values wrapped by a curly braces.
*/

var umbrella = {
  color: black,
  isOpen: false,
  open: function() {
      //this checks the value of the object
      if (umbrella.isOpen === true) {
        return 'The umbrella is already opened!';
      } else {
        umbrella.isOpen = true;
        return 'The umbrella is opening.';
      }
  },
  close: function() {
    if (umbrella.isOpen === false) {
      return 'The umbrella is already closed!';
    } else {
      umbrella.isOpen = false;
      return 'Closing the umbrella right now!';
    }
  }
};
