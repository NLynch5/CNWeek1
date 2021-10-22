// Thursday AM

//let age = 45;
//
//if (age <= 18 && age <60){
//  console.log ("£10.95");
//} else if  (age >18); 
//  console.log ("£8");
// else if { (age >=60);
//   console.log ("£7.50")
//}

const faveColour = (color, bread) => {
    console.log (`My favourite colour is ${color} NOT ${bread}`);
} 
faveColour ("Blue", "orange");

//Activity 1

//const factorial = (n) => {
//if ((n === 0) || (n === 1)) {
//    return 1;
//} else {
//    return (n * factorial (n-1));
//}
//    console.log (n * factorial (n-1));
//}
//factorial (33);
//console.log (n * factorial (n-1));

//Actvity 2

let orderCount = 0;
const takeOrder = (size, topping1, topping2) => {
    console.log (`${size} pizza with ${topping1} and ${topping2}`);
    orderCount++;
}
takeOrder ("Large", "pineapple", "ham");    

//Activity 3

let pin = (1234); 
//let balance = (300);

const withdrawal = () => {
    if (pin == 1234 && balance <= 300){
    console.log(`Take your £${balance} please`);
} else {
    console.log(" This transaction cannot be processed");
}
}
withdrawal (1234, 300);