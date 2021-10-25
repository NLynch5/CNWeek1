//const person = {
  //  name: "Natalie",
    //age: 33,
    //songs:[
//"Cheeky Girls",
//"Africa",
//"Gold"
 //   ]
//};
//console.log (person.name)

//Class Activity 

let day = "Saturday";
let alarm = " ";

let alarmMessages = {
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up"
};

if (day == "Saturday" || day == "Sunday"){
    alarm = alarmMessages.weekendAlarm
} else {
    alarm = alarmMessages.weekdayAlarm
}

console.log(alarm)

//Activity 1

let person = {
  name: "Natalie",
  age: 33,
  songs:[
      "Africa",
      "Dreams",
      "High"  
],
sayHi(){
    return(`Hello my name is ${person.name}`);
}
};
console.log(person.sayHi());



//Activity 2

//let pet = {
  //  catName: "Remi",
    //typeOfPet: "Cat",
    //age: 4,
    //colour: "brown" 
//};
//console.log(`My pet ${typeofPet} is `)
 



//Activity 3

const coffeeShop = {
    branch: "MCR",
    drinks: ["Coffee", 2.50, "Tea", 1.50],
    food: ["Sandwich", 3, "Soup", 2], 
drinksOrdered (drink){
 let order = " "
 let cost = 0
  for (let i=0; i < (drink.length); i++){
  for (let j=0; j < (this.drinks.length); j++){
     if (drink[i]===this.drinks[j]){
         cost += this.drinks[j+1]
         order = order + `${drink[i]} £${this.drinks[j+1]}`
     }
    }
}
return `Drink ${order}\nCost - £${cost}\n`
},
foodOrdered (food){
    let order = " "
    let cost = 0
    for (let i = 0; i < (food.length); i++){
    for (let j = 0; j < (this.food.length); j++){
    if (food[i]===this.food[j]){
        cost += this.food[j+1]
        order = order + `${food[i]} £${this.food[j+1]}`
    } 
}
}
return `Food ${order}\nCost - £${cost}\n`
}
}
console.log(coffeeShop.foodOrdered["Sandwich", "Soup"]);
console.log (coffeeShop.drinksOrdered["Coffee", "Tea"]);

