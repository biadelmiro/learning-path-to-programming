/* In this simple SWITCH statement code, we can declare two variables and, based
on value of the first variable 'education', the program will determine the value
of the second variable 'salary'.

NOTE that the numbers assigned to 'salary' don't have any characters separating
them. This is because at the end of the code, inside the 'console.log', in the
variable 'salary' were used the .toLocaleString() method, and passed it to
the "en-US" locale. Then, this method were assigned to 'salary' variable showing
the numbers with comma.
*/

var education = "no high school diploma";
var salary = 0;

switch (education) {
  case "no high school diploma":
    salary = 25636;
    break;
  case "a high school diploma":
    salary = 35256;
    break;
  case "an Associate's degree":
    salary = 41496;
    break;
  case "a Bachelor's degree":
    salary = 59124;
    break;
  case "a Master's degree":
    salary = 69732;
    break;
  case "a Professional degree":
    salary = 89960;
    break;
  case "a Doctoral degree":
    salary = 84396;
    break;
}

console.log("In 2015, a person with " + education + " earned an average of " + "$" + salary.toLocaleString("en-US") + "/year.");
