var shirtWidth = 18.5;
var shirtLength = 28;
var shirtSleeve = 8.26;

if ((shirtWidth >= 18 && shirtWidth < 20) && shirtLength === 28 && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
    console.log("This is a small(S) size T-shirt.");
} else if (shirtWidth >= 20 && shirtWidth < 22 && shirtLength === 29 && shirtSleeve >= 8.38 && shirtSleeve < 8.63) {
    console.log("This is a medium(M) size T-shirt.");
} else if (shirtWidth >= 22 && shirtWidth < 24 && shirtLength === 30 && shirtSleeve >= 8.63 && shirtSleeve < 8.88) {
    console.log("This is a large(L) size T-shirt.");
} else if (shirtWidth >= 24 && shirtWidth < 26 && shirtLength >= 31 && shirtLength < 33 && shirtSleeve >= 8.88 && shirtSleeve < 9.63) {
    console.log("This is a XL size T-shirt.");
} else if (shirtWidth >= 26 && shirtWidth < 28 && shirtLength === 33 && shirtSleeve >= 9.63 && shirtSleeve < 10.13) {
    console.log("This is a 2XL size T-shirt.");
} else if (shirtWidth === 28 && shirtLength === 34 && shirtSleeve === 10.33) {
    console.log("This is a 3XL size T-shirt.");
} else {
    console.log("Sorry! We don't have this size in stock.");

}