/* 
We can retrieve keys and values of objects using the methods of the object() constructor.
The object constructor has two methods of its own:
Object.keys();
Object.values();
 */

const dictionary = {
    car: 'automobile',
    apple: 'healthy snack',
    cat: 'cute furry animal',
    dog: 'best friend'
  };  

Object.keys(dictionary);
//object property keys
//It won't return an object that is inside the object called

Object.values(dictionary);
//object key values
//It can return keys+values of nother object that's inside an object.