/*This test can be done by using simple concatenation of the variable 'amount'
to a string. To make the variable change it's value without change the counter
i simply subtracted -1 from the total of bottles without store the result inside
a variable, with no assignment*/

var amount = 5;

while (amount > 2) {
  console.log(amount+" bottles of juice on the wall! "+ amount +" bottles of juice! Take one down, pass it around... "
  +(amount-1)+" bottles of juice on the wall!");
  amount -= 1;
 }
if (amount === 2) {
  console.log(amount+" bottles of juice on the wall! "+ amount +" bottles of juice! Take one down, pass it around... "
  +(amount-1)+ " bottle of juice on the wall!");
amount -= 1;
}
console.log(amount+" bottle of juice on the wall! "+ amount +" bottle of juice! Take one down, pass it around... "
+(amount-1)+ " bottles of juice on the wall!");
