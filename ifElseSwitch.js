// TUES PM Activity 1

let age1 = 17;
let country = "UK";

if ((age1 >= 17 && country == "UK") || country == "uk") {
  console.log("Yes I can serve you");
} else if (age1 <= 17) {
  console.log("You aren't old enough");
}

//Activity 2

let pizza = "Pepperoni";
let pizBad = "Olives";

switch (pizza) {
  case "Pepperoni":
  case "ham":
    console.log(`I don't mind having ${pizza} on my pizza.`);
    break;
  case "Mushrooms":
    console.log("This should not be on my pizza");
    break;
  default:
    console.log(`${pizBad} should not be on a pizza.`);
}

//Activity 3

let password = "hellomoto";

if (password.length < 8) {
  console.log("You're password is too short");
} else {
  password.length > 8;
  console.log("Great, thank you.");
}

//Activity 4

let num = 15;

if (num % 3 === 0 && num % 5 === 0) {
  console.log("Fizz Buzz!");
} else if (num % 5 === 0) {
  console.log("Buzz");
} else if (num % 3 === 0) {
  console.log("Fizz ");
} else {
  console.log("Try again!");
}

//Activity 5
let palindrone = 7007;
console.log(palindrone)
let palinString = palindrone.toString();
console.log (palinString);
let palinSplit = palinString.split('');
console.log (palinSplit);
let palinReverse = palinSplit.reverse();
console.log(palinReverse)

if (palindrone == palinReverse){
  console.log ("This is a Palindrone");
} else {
  console.log ("This is not a Palindrone");
}

//Activity 6
//let time = today 
//let placeOfWork = Study
//let townOfHome = Bedroom

//if (time <9) {
 // console.log 
//}




//Activity 7

let Act7 = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
console.log (Act7.slice (-1));

const sentence = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
const lastVowel = sentence.slice(-1);
const vlength = sentence.length;
console.log("This string has" + " " + vlength + " " + "characters" );
console.log(`The last vowel is ${lastVowel}, in the position ${vlength}`);

//Activity 8

let word = "pop";
console.log ("pop");
let wordSplit = word.split('');
console.log (wordSplit);
if (wordSplit[0] === wordSplit [2]){
  console.log ("True");
} else {
  console.log ("False");
}

//Activity 9

let num1 = 2
let num2 = 2

if (num1 + num2 == 3){
  console.log ("This number is even");
} else if (condition) {
  console.log("This number is not even");
} else {
  
} {
  
}