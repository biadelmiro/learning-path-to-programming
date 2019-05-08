words = ["cat", "in", "hat"];
//'word' indicates an element, 'num' indicates an index and 'all' , the array.
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});

/*
Expected output:

Word 0 in cat,in,hat is cat
Word 1 in cat,in,hat is in
Word 2 in cat,in,hat is hat
*/

var array = ['A', 'B', 'B', 'C'];

array.forEach(function(item) {
  if (item === 'B') {
    item += ' + iteration';
  }
  console.log(item);
})
