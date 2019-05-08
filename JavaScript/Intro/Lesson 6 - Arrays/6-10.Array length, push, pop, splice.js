var array = ['A', 'BTGA', 2, 0.5, true, null, NaN, undefined];
//It modifies the value inside the array index
array[1] = 'ABGT';
//arrayName.length (a property or function) return total number of elements
//inside an array.
//When we use a dot, we're calling a function after that
console.log(array.length);
// we aldo may refer an index of the array to count hoy many characters have,
// if it's a string.
console.log(array[1].length);//Returns amount of characters in index 1
/*Method that adds another element at the end of the array
Note that this function must be and argument to pass tho its parameters to
change the last element of the array.
This method also returns the length of the array after an element has een added*/
array.push('anotherElement');
//The pop() method removes an element from the end of the array
//We don't need to pass any arguments to this method
array.pop();//Returns array = ['A', 'BTGA', 2, 0.5, true, null, NaN]

/*
SPLICE

Splice is another handy method that allows you to add and remove elements from anywhere
within an array.

While push() and pop() limit you to adding and removing elements from the end of an
array, splice() lets you specify the index location to add new elements, as well as
the number of elements you'd like to delete (if any).
*/

/*SYNTAX

array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

Start: Index at which to start changing the array (with origin 0).

deleteCount: An integer indicating the number of array elements, from
starting point, to remove.

If deleteCount is omitted, or if its value is larger than array.length,
all elements from start through the end of the array will be deleted.

If deleteCount is 0 or negative, no elements are removed.

var arrayName = [1, 3, 120, 'cake, null, true', NaN, false];
array.splice(2,3, 'Hello');

Return: [1, 3, Hello, NaN, false];

Ex.2:

var arrayName = [1, 3, 120, 'cake, null, true', NaN, false];
array.splice(2,2, 'Hello', 37);

Return: [1, 3, 'Hello', 37, 'cake, null, true', NaN, false];

If we want to insert 1 more item inside an array of index 3, simply put 1 more index after the last
and it wil be created. But we just can do that if we have as many items to insert as indexes passeds as
arguments

*/
array.splice(1, 3, Olá);
