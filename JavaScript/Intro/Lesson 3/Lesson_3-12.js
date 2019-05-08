var balance = -142;
var checkBalance = true;
var isActive = true;

if (checkBalance) {
    if (isActive && balance > 0) {
        console.log("Your balance is $" + balance + ".");
    } else if (!isActive) {
        console.log("Your account is no longer active.");
    } else if (balance === 0) {
        console.log("Your account is empty.")
    } else {
        console.log("Your account is negative. Please contact the bank.");
    }
} else {
    console.log("Thank you. Have a nice day!");
}
