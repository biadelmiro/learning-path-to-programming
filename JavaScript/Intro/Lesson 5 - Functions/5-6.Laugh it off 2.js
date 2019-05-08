function laugh(num) {
    var laughter = "";
    for (var i = 1; i <= num; i++){
        laughter += "ha";
    }
    //It's possible to concatenate results like these.
    return laughter + "!";
}
console.log(laugh(3));
