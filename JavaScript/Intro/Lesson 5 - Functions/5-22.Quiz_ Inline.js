function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

emotions('happy',function laugh(num) {
  var ha ='';
  for(var i = 1; i <= 2; i++) {
    ha += 'ha';
  }
  return ha + '!';
 });
