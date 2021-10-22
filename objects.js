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

//Activity 

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

let pet = {
    catName: "Remi",
    typeOfPet: "Cat",
    age: 4,
    colour: "brown" 
};
 catEat:()=>{
     return "Cat is Eating";
 },
 //catDrink:() =>{
   //  return "Cat is Drinking";
 //};
 console.log (pet.catEat());
 //console.log (pet.catDrink());

//Activity 3

const coffeeShop = {
    branch: "MCR",
    drinks: ["Coffee - £2.50", "Tea - £1.50"],
    food: ["Sandwich - £3", "Soup - £2"], 
},

for (const i=0; i < coffeeShop.length; i ++){
    
}


drinksOrdered (){
    return (`${this.coffeeShop.drinks[i][1]} and ${this.coffeeShop.food[i][0]}`)
}
console.log (coffeeShop.drinks());









