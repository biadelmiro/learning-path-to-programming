//Object-literal notation

var sister = {
  name: "Sarah",
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true
  paintPicture: function() { return "Sarah paints!"; }
};

/*
he syntax you see above is called object-literal notation. There are some important
things you need to remember when you're structuring an object literal:

The "key" (representing a property or method name) and its "value" are separated
from each other by a colon
The key: value pairs are separated from each other by commas
The entire object is wrapped inside curly braces { }.

the key in a key:value pair allows you to look up a piece of information about
an object. Here's are a couple examples of how you can retrieve information about
sister's parents using the object you created.
*/

sister['parents'] //returns [ "alice", "andy" ] -> this is called bracket notation
sister.parents //also returns [ "alice", "andy" ] -> this is called dot notation
sister.paintPicture(); //returns "Sara paints!"
