// TUES AM CLASS & ACTIVITY

let name = "Natalie";
let age = 33;
let favColour = "Green";
console.log(
  `Hi my name is ${name}. i am ${age} and my favourite colour is ${favColour}.`
);

age = 34;
favColour = "Yellow";
console.log(
  `Hi my name is ${name}. I am ${age} and my favourite colour is ${favColour}.`
);

let brekkie = "crumpets";
let lunch = "soup";
let dinner = "pasta";

console.log(
  `Today I will eat ${brekkie} for breakfast. For lunch i will have ${lunch} and for dinner i will eat ${dinner}.`
);

brekkie = "toast";
lunch = "salad";
dinner = "cottage pie";
console.log(
  `Tomorrow I will eat ${brekkie} for breakfast. For lunch I will have ${lunch} and for dinner i will eat ${dinner}.`
);

const birthDate = new Date(" November 05, 1987");
const dateNow = new Date("October, 19, 2021");
const difference = dateNow.getTime() - birthDate.getTime();
console.log(difference); //1071529200000 ms

const time = 1071529200000;
const days = Math.floor(time / (1000 * 60 * 60 * 24)) % 24;
console.log(days);

let space1 = "   |    |    ";
let space2 = " x |  0 |    ";
let space3 = " ------------";
let space4 = " x |  x |    ";
let space5 = " 0 |    |    ";
console.log(space1);
console.log(space2);
console.log(space1);
console.log(space3);
console.log(space1);
console.log(space4);
console.log(space1);
console.log(space3);
console.log(space1);
console.log(space5);
console.log(space1);

let place = "Manc";
let weather = "Cloudy";

if (place == "Manc" && weather == "Sunny") {
  console.log("Check again");
} else if (place == "Manc" && weather == "Rain") {
  console.log("Obvs");
} else {
  console.log("What is isn't raining?");
}
